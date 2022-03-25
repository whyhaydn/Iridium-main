const form = document.querySelector('form');
const input = document.querySelector('input');
// const blacklisted = require("./blacklisted.json").patterns;
form.addEventListener('submit', async event => {
  event.preventDefault();
  window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  });t
});

function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};
if (window.Worker && !sessionStorage['stats-worker-active']) {
  var analyticsWorker = new Worker("/stats.worker.js");
  sessionStorage['ld-worker-active'] = analyticsWorker;
}
