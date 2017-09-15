// for문을 사용해서 1부터 100까지

for(var num=1; num <= 100; num++){
  console.log(num);
}

// 홀수
for(var num1=1; num1<=100; num1++){
 if(num1%2) {
   console.log(num1)
 }
}

//구구단
for(var i=1; i<=9; i++){

 console.log(i + "단 시작해봅시다");

 for(var j=1; j<=9; j++){

   console.log(i +"x"+ j + "=" + (i * j));
 }

}

//마지막 문제
var num = 0;
var total = 0;

for(var end = false; end === false; ){

  num = prompt("숫자를 입력하시오~~~~~~~");

  if(num === null){
    alert("합은 "+ total +" 입니다");
    end = true;
    break;
  }
  else {
    total += parseInt(num);
  }
}
