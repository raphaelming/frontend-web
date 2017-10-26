console.log('연결됨');
//url 및 url setting
var content = ['trending', 'issue', 'enter'];
var pageNum = 1
var pageSize = 10
var url = 'http://1boon.kakao.com/ch/'
var trendingUrl = url +content[0]+'.json?pageSize='+pageSize+'&page=';
var issueUrl = url + content[1]+'.json?pageSize='+pageSize+'&page=';
var enterUrl = url + content[2]+'.json?pageSize='+pageSize+'&page=';
var indexUrl = trendingUrl;

//tap 전환 관련
var mainActive = document.querySelector('.active');
var className = '';
var selectedDom = null;
var actives = document.querySelectorAll('li');
var list = document.getElementById('list');
var trending = document.getElementById('trending');
var issue = document.getElementById('issue');
var enter = document.getElementById('enter');

// btn dom
var seeMore_btn = document.getElementById('seeMore');

// loading dom
var loading_active = document.getElementById('loading');
var str = '';
// indexUrl 호출

getJSON(indexUrl + pageNum, done);

// str 초기화
// function strInit(){
//   var str = '';
// }

// innerHTML
function innerHtmlAction(){
  list.innerHTML = str;
}

function done(result){
  // strInit();
  // console.log(result);

  for(var i=0; i < result.data.length; i++){
    // console.log(result.data[i].titleKo)
    str += '<a href="http://1boon.kakao.com/'+ result.data[i].path +'" class="link">';
    str += '<h3>'+result.data[i].title+'</h3>'
    str += '<img src='+result.data[i].coverImage+' width="100">'
    str += '<h3>'+'조회수 :'+result.data[i].totalView+'</h3>'
  }
  innerHtmlAction();
}


// Tab 전환

function selectActive(event) {
  // console.log('selected');
  var active = event.currentTarget;
  // console.log(active)
  if(selectedDom){
    selectedDom.className =  selectedDom.className.replace('active', '');
  }
  mainActive.className = '';
  active.className = 'active';
  selectedDom = active;
  lodingActive();
}
for(var i=0; i<actives.length; i++){
  actives[i].addEventListener('click', selectActive);
}


// Tap 별 화면 전환

function selectTrending(event) {
  console.log('trendingClick');
  str = '';
  indexUrl = trendingUrl;
  getJSON(indexUrl + pageNum, done);
  innerHtmlAction();
}
function selectIssue(event) {
  console.log('issueClick');
  str = '';
  indexUrl = issueUrl;
  getJSON(indexUrl + pageNum, done);
  innerHtmlAction();
}
function selectEnter(event) {
  console.log('enterClick');
  str = '';
  indexUrl = enterUrl;
  getJSON(indexUrl + pageNum, done);
  innerHtmlAction();
}

// page 파라미터 이용하여 더보기 기능 구현
function seeMore(event) {
  console.log('more');
  pageNum++;
  getJSON(indexUrl + pageNum, done);
  lodingActive();
}

// loading
function lodingActive(event){
  console.log('loading');
  list.appendChild(loading_active);
}
// 실행

trending.addEventListener('click', selectTrending);
issue.addEventListener('click', selectIssue);
enter.addEventListener('click', selectEnter);
seeMore_btn.addEventListener('click', seeMore);
