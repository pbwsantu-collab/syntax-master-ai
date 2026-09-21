/* Syntax Master AI — entry: load data then app */
(function () {
  function load(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  load('sma-data.js')
    .then(function () { return load('sma-app.js'); })
    .catch(function (e) {
      console.error(e);
      document.body.innerHTML = '<div style="padding:2rem;font-family:system-ui"><h2>Failed to load app scripts</h2><p>Hard-refresh (Ctrl+Shift+R). Files needed: sma-data.js, sma-app.js</p></div>';
    });
})();
