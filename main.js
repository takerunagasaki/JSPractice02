/* global $ */

let btCnt = 10.0;
let fCnt = 0.0;
let math = 0.0;
let math1 = 0.0;
let math2 = 0.0;
let mathtext = "";
let f = 1.0;
let x = 0.0;
let xx = 1.0;


function no(x,xx){
  if (fCnt == 1.0 && xx == 1.0){  //通常の数字が押されたら
    f *= 0.1;
  }else if (fCnt == 1.0 && xx == 10.0){ //00が押されたら。
    f *= 0.01;
    xx = 1.0
  }
  math = math * (btCnt * xx) + (x * f);
  $(".MathKekka").text(math); //テキストを変更する処理です。

};

function noPlus(){  //加算
  
};
function noMinus(){ //引き算
  
};
function noAst(){ //掛け算
  
};
function noSlash(){ //小数点
  
};
function nodot(){ //ドット
  fCnt = 1.0;
  btCnt = 1.0;
};

function noAC(){  //クリア
  math = 0.0;
  fCnt = 0.0;
  btCnt = 10.0;
  f = 1;
  $(".MathKekka").text(math); //テキストを変更する処理です。          
};
function noEq(){  //答え
  
};
