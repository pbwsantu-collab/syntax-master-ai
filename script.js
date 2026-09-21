/* Syntax Master AI — loads main application */
(function () {
  var s = document.createElement('script');
  s.src = 'script-data.js';
  s.async = false;
  s.onerror = function () {
    document.body.innerHTML = '<div style="padding:2rem;font-family:sans-serif"><h2>Script failed to load</h2><p>Please hard-refresh (Ctrl+Shift+R) or check script-data.js.</p></div>';
  };
  document.head.appendChild(s);
})();
