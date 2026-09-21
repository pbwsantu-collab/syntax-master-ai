(function(){
  function get(url){
    return fetch(url).then(function(r){
      if(!r.ok) throw new Error(url + ' (' + r.status + ')');
      return r.text();
    });
  }
  Promise.all([get('p1.js'), get('p2.js')]).then(function(parts){
    var s = document.createElement('script');
    s.textContent = parts[0] + parts[1];
    document.head.appendChild(s);
    // If DOM already ready, init may have been skipped — trigger manually
    if (document.readyState !== 'loading') {
      // p2 registers DOMContentLoaded; if already past, fire a synthetic path
      setTimeout(function(){
        var splash = document.getElementById('splash');
        var app = document.getElementById('app');
        if (splash && !splash.classList.contains('hidden')) {
          // Try to find and call init via a custom event
          document.dispatchEvent(new Event('DOMContentLoaded'));
        }
      }, 50);
    }
  }).catch(function(e){
    console.error(e);
    document.body.innerHTML = '<div style="padding:2rem;font-family:system-ui"><h2>Load error</h2><p>' + e + '</p><p>Hard-refresh (Ctrl+Shift+R).</p></div>';
  });
})();
