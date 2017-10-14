var url = 'http://movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20170801&endDate=20171013&pageSize=10&pageNo=';
//

var info = document.getElementById('info')
var str = '';

getJSON(url, done);

function done(result){

  console.log(result);


  for(var i=0; i < result.data.length; i++){

    console.log(result.data[i].titleKo)
    // str += '<h3>'+result.data[i].
    str += '<h2>'+'영화제목 : '+result.data[i].titleKo+'</h2>'
    str += '<h3>'+result.data[i].rank.ranking+'위'+'</h3>'
    str += '<h3>'+'점유율 '+result.data[i].rank.marketShare+'%'+'</h3>'
    str += '<h3>'+'평점 : '+result.data[i].moviePoint.inspectPointAvg+'점'+'</h3>'
    str += '<img src='+result.data[i].photo.fullname+' width="100">'

  }

  info.innerHTML = str;
}
