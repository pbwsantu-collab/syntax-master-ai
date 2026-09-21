(function(){
  function get(url){ return fetch(url).then(function(r){ if(!r.ok) throw new Error(url); return r.text(); }); }
  Promise.all([get('p1.js'), get('p2.js')]).then(function(parts){
    var s = document.createElement('script');
    s.textContent = parts[0] + parts[1];
    document.head.appendChild(s);
  }).catch(function(e){
    console.error(e);
    document.body.innerHTML = '<div style="padding:2rem;font-family:system-ui"><h2>Load error</h2><p>'+e+'</p><p>Hard-refresh (Ctrl+Shift+R).</p></div>';
  });
})();
