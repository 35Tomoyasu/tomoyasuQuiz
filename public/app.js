// 即時関数で囲う(グローバル汚染防止)

(() => {
  // ここに命令を書く

const tomoyasuQuiz = [
  {
    question: '問題1：友康の血液型は次のうちどれ？',
    answers: [
      '① A型',
      '② B型',
      '③ O型',
      '④ AB型'
    ],
    correct: '① A型'
  }
  ,{
    question: '問題2：友康が通っていなかった習い事は次のうちどれ？',
    answers: [
      '① ピアノ',
      '② 英会話',
      '③ 水泳',
      '④ 書道'
    ],
    correct: '④ 書道'
  },{
    question: '問題3：友康が高校時代に通っていた予備校は次のうちどれ？',
    answers: [
      '① 駿台予備校',
      '② 河合塾',
      '③ 代々木ゼミナール',
      '④ 東進衛星予備校'
    ],
    correct: '② 河合塾'
  },{
    question: '問題4：友康の50m人生最速タイムは次のうちどれ？',
    answers: [
      '① 6.4秒',
      '② 6.6秒',
      '③ 6.8秒',
      '④ 7.0秒'
    ],
    correct: '③ 6.8秒'
  },{
    question: '問題5：友康がZoom人狼を人生で初めてやった時期は次のうちどれ？',
    answers: [
      '① 2020年1月',
      '② 2020年3月',
      '③ 2020年5月',
      '④ 2020年7月'
    ],
    correct: '③ 2020年5月'
  },{
    question: '問題6：友康が趣味の野球観戦で遠征したことがない場所は次のうちどれ？',
    answers: [
      '① 札幌',
      '② 仙台',
      '③ 広島',
      '④ 福岡'
    ],
    correct: '① 札幌'
  },{
    question: '問題7：友康の小学生の頃の夢は次のうちどれ？',
    answers: [
      '① 学校の先生',
      '② スポーツ選手',
      '③ ゲームクリエイター',
      '④ 気象予報士'
    ],
    correct: '④ 気象予報士'
  },{
    question: '問題8：友康が人狼同士で組んだ経験がない人は次のうちどれ？',
    answers: [
      '① サンドラ',
      '② Leo',
      '③ もこ',
      '④ にし'
    ],
    correct: '③ もこ'
  },{
    question: '問題9：友康が中学生の頃、100点を取ったことがある教科は次のうちどれ？',
    answers: [
      '① 英語',
      '② 数学',
      '③ 理科',
      '④ 社会'
    ],
    correct: '④ 社会'
  },{
    question: '問題10：友康は、2011年3月11日の東日本大震災が起きた時いた場所は次のうちどれ？',
    answers: [
      '① 学校',
      '② 予備校',
      '③ 自宅',
      '④ 車内'
    ],
    correct: '② 予備校'
  }
];  

// クイズの数を定数化
const tomoyasuQuizLength = tomoyasuQuiz.length;

// 「クイズの数」分をループ処理させるために初期化
let tomoyasuQuizIndex = 0;

// クイズの「正解数」を変数化
let correctCount = 0;
let score = 0;



// ※問題・選択肢・正解の1セット
// const question = '問題１：友康の血液型は次のうちどれ？';
// const answers = [
//   'A',
//   'B',
//   'O',
//   'AB'
// ];
// const correct ='A';


// 4つの選択肢を定数化(document.getElementsByTagName('button')を何度も使うため）
// HTMLのオブジェクトを取ってくる場合、変数・定数の前に'$'を入れる（暗黙のルール）
// getElementsByTag: ※Elementsの's'は複数形
const $button =　document.getElementsByTagName('button')

// 選択肢ボタンの数を定数化
const buttonLength = $button.length;


// クイズ問題文、選択肢を定義('setupQuiz'で関数化)
const setupQuiz = () => {

  // 定数の文字列をHTMLに反映させる
  // textContent: このHTMLタグが持っているテキスト情報を取得するプロパティ
  // '='を付けるとHTML内のテキスト書き換え可能
  document.getElementById('js-question').textContent = tomoyasuQuiz[tomoyasuQuizIndex].question;

  // $buttonのtextContentをそれぞれ配列'answers'内の要素にそれぞれ置き換える
  // $button[0].textContent = answers[0];
  // $button[1].textContent = answers[1];
  // $button[2].textContent = answers[2];
  // $button[3].textContent = answers[3];

  // while文で文字列のHTML反映処理をループさせる
  let buttonIndex = 0;
  let buttonLength = $button.length;

  while (buttonIndex < buttonLength) {
    // ここに命令($buttonの文字列を配列'answers'の要素に反映させる処理)
    $button[buttonIndex].textContent = tomoyasuQuiz[tomoyasuQuizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


// ユーザーの処理
// ボタンを押したら正誤判定(if~else文使う)
// $button[0].addEventListener('click', () => {
//   if (correct === $button[0].textContent) {
//     window.alert('正解！');
//   } else {
//     window.alert('不正解！');
//   }
// }); 

// $button[1].addEventListener('click', () => {
//   if (correct === $button[1].textContent) {
//     window.alert('正解！');
//   } else {
//     window.alert('不正解！');
//   }
// }); 

// $button[2].addEventListener('click', () => {
//   if (correct === $button[2].textContent) {
//     window.alert('正解！');
//   } else {
//     window.alert('不正解！');
//   }
// }); 

// $button[3].addEventListener('click', () => {
//   if (correct === $button[3].textContent) {
//     window.alert('正解！');
//   } else {
//     window.alert('不正解！');
//   }
// });


// 上記処理を簡素化 

// 選択肢クリック動作を定義('clickHandler'で関数化)
const clickHandler = (e) => {
  // e: イベントのオブジェクト
  // クリックされた要素に何かしたい時は、'e-target'で書くことが可能
  if (tomoyasuQuiz[tomoyasuQuizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    correctCount++;
    score += 10;
  } else {
    window.alert('不正解！');
  }
  // 「次の問題へ進む」ための処理
  tomoyasuQuizIndex++;

  if (tomoyasuQuizIndex < tomoyasuQuizLength) {
    // 問題数がまだあれば、下記を実行
    setupQuiz();
  } else {
    // 問題が全て終了していれば、下記を実行
    window.alert('終了！あなたの正解数は' + correctCount + '/' + tomoyasuQuizLength + '問 【' + score + '点】 だ！' + '\n' + '\n'
      + '【90〜100点のあなた】 => 素晴らしい😄 「友康愛好会」に入ろう！' + '\n'
      + '【60〜80点のあなた】 => 上出来😌 あともう少しで「友康愛好会」の仲間入りだ！' + '\n'
      + '【30〜50点のあなた】 => 微妙😅 友康の話にもっと興味を持とう！' + '\n'
      + '【0〜20点のあなた】　=> 残念😔 1から友康のことを知る努力が必要だな！');
  }
};

// while文で'if~else文'をループ処理
let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    // 引数に'e'を入れ忘れずに
    clickHandler(e);
  }); 
  handlerIndex++;
}


// ※ループ処理の構造
// $button[0].addEventListener('click', (e) => {
//   // 引数に'e'を入れ忘れずに
//   clickHandler(e);
// }); 

// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// }); 

// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// }); 

// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });


})();