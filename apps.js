const quiz = [
  {
    question: 'マックフライドポテトのバギング時間は？',
    answers: [ '2分30秒', '2分55秒', '3分35秒', '4分55秒'],
    correct: '2分55秒',
    badAnswer: '4分55秒'
  }, {
    question: 'マックフィズの元となるドリンクとそのサイズは？',
    answers: [ 'スプライト Mサイズ', 'ファンタグレープ Lサイズ', 'スプライト Sサイズ', 'スプライト Lサイズ'],
    correct: 'スプライト Sサイズ',
    badAnswer: 'ファンタグレープ Lサイズ'
  }, {
    question: 'マックデリバリーで遅配、早配が決まる(連絡しなければいけなくなる)時間は、配達希望時間から何分のズレから？',
    answers: [ '5分', '15分', '20分', '30分'],
    correct: '20分',
    badAnswer: '5分'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else if(elm.textContent === quiz[quizCount].badAnswer){
      $window.alert('一番的外れな答えです😐　正解は' + quiz[quizCount].correct + 'です!');
     
    } else {
      $window.alert('不正解!正解は' + quiz[quizCount].correct + 'です!');
    }
      goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です!';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}