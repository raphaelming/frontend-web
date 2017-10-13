console.log('ajax');

var btn = document.getElementById('btn');


btn.addEventListener('click', load);

function load() {
  console.log('load');
  var req = new XMLHttpRequest();

  req.open('GET', 'dummy', true);
  console.log(req);
}
