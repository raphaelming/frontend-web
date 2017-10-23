console.log('연결됨');

var content = ['trending', 'issue', 'enter'];
var pageNum = 1
var pageSize = 3
var url = 'http://1boon.kakao.com/ch/'+content[0]+'.json?pageSize='+pageSize+'&page='+pageNum+'';
var wrap = document.querySelector('.active');
var className = '';
var isActive = false;
var seeMore = document.getElementById('seeMore');
var list = document.getElementById('list')
// var activeNum = document.getElementsByClassName('active');
var str = '';

getJSON(url, done);

function done(result){

  console.log(result);
  for(var i=0; i < pageSize; i++){
    // console.log(result.data[i].titleKo)
    str += '<h3>'+result.data[i].title+'</h3>'
    str += '<img src='+result.data[i].coverImage+' width="100">'
    str += '<h3>'+'조회수 :'+result.data[i].totalView+'</h3>'
  }
  list.innerHTML = str;
}


//더보기 클릭 이벤트
// seeMore.addEventListener('click', function(){
//   console.log('seeMore');
//   pageNum++;
//   getJSON(url, done);
// })
