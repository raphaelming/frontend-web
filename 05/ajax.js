console.log('ajax');

var btn = document.getElementById('btn');


btn.addEventListener('click', load);

function load() {
  console.log('load');
  var req = new XMLHttpRequest();

  req.open('GET', 'dummy.json', true);
  console.log(req);
  req.onreadystatechange = function() {
    if(req.readyState === 4){
      console.log(req.status);
    }
  }
  req.send();
}
