// 変数の定義:let
let person = 'tomoyasu';

// 変数の値上書き
// person = 'kenji';


// 定数の定義:const（書き換え不可）
const different_person = '友康';

// different_person = '健二'　※上書き無効


// 配列
let family = ['tomoyasu', 'kenji', 'shinnichi', 'harumi'];


// ループ文:while
// let index = 0;
// while(index < family.length){
//   // 繰り返したい命令
//   console.log(family[index]);
//   index++;
// }


// 条件分岐:if/else
// if (family.length > 5) {
//   console.log('shirayama');
// } else {
//   console.log('白山');
// }

// 関数
const test = (arg) => {
  // ここに実行したい命令を書く
  if (family.length > arg) {
    console.log('shirayama');
  } else {
    console.log('白山');
  }
};


// オブジェクト
const person_t = {
  name: 'tomoyasu',
  age: '27',
  blood_type: 'A',
  girl_friend: () => {
    console.log('kyouno');
  }
};

// 出力:console.log
// console.log();


// ポップアップを呼ぶ関数：window.alert
// window.alert('tomoyasu');


// document
// console.log(document.getElementsByTagName('button')[0]);

// event
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  // 命令を書く
  window.alert('ともやす');

});




