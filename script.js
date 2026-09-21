(function(){
  function get(url){
    return fetch(url + '?t=' + Date.now()).then(function(r){
      if(!r.ok) throw new Error(url + ' (' + r.status + ')');
      return r.text();
    });
  }
  Promise.all([get('p1.js'), get('p2.js')]).then(function(parts){
    var code = parts[0] + parts[1];
    code = code.replace(
      /document\.addEventListener\(['\"]DOMContentLoaded['\"],\s*init\);/,
      "if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }"
    );
    var s = document.createElement('script');
    s.textContent = code;
    document.head.appendChild(s);
  }).catch(function(e){
    console.error(e);
    document.body.innerHTML = '<div style="padding:2rem;font-family:system-ui"><h2>Load error</h2><p>' + e + '</p><p>Hard-refresh (Ctrl+Shift+R).</p></div>';
  });
})();
