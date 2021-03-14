/* global $ */

let btCnt = 10.0;
let DotF = 0;
let NoF = 1;
let fCnt = 0.0;
let fCnt1 = 0.0;
let math = 0.0;
let math1 = 0.0;
let math2 = 0.0;
let mathtext = "";
let f = 1.0;
let x;
let xx;
let xxx;
let q;


function no(x){
  xx = document.querySelector( '.MathKekka' ).value;
  
  if ((((x == '0' || x == '00' ) && xx == "0")) || (x == '.' && DotF == 1)){
      x = '';
  }else if((x == "+" || x == "-" || x == "*" || x == "/") && (NoF == 1)){
      mathtext = ""
      DotF = 0;
      NoF = 0;
  }else if((x == "+" || x == "-" || x == "*" || x == "/" ) && (NoF == 0)){
      x = '';
      
  }else if (x == "." && DotF == 0){
    NoF = 0;
    DotF = 1;
  }else if (xx == "0"){
      document.querySelector( '.MathKekka' ).value = x;
      x = '';
      NoF = 1;
  }else {
    mathtext += x;
    NoF = 1;
  }
  
  document.querySelector( '.MathKekka' ).value += x;

};

function noAC(x){  //クリア
  mathtext = x;
  DotF = 0;
  NoF = 1;
  document.querySelector( '.MathKekka' ).value = x;
     
};
function noEq(xx){  //答え
  if (NoF == 1){
    const v = document.querySelector( '.MathKekka' ).value //インプットに入力された値を取得
    const q = new Function( 'return ' + v );  　//関数qにvの値を渡す
    x = (q().toString() )
    document.querySelector( '.MathKekka').value = x
  }
};
