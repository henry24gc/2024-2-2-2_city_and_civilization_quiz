// quizData 배열에서 각 문제와 그에 해당하는 이미지를 로드하는 함수
let currentQuizIndex = 0; // 현재 퀴즈의 인덱스
const quizData = [
    {
        question: "( ) 해결 정책",
        answer: "통일 문제",
        image: "images/1.JPEG"
    },
    {
        question: "피라미드 효과 : ( )",
        answer: "성장 동력",
        image: "images/2.JPEG"
    },
    // 나머지 퀴즈 데이터 생략...
];

// 퀴즈 시작 함수
function startQuiz(mode) {
    document.getElementById('mode-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

// 문제 로드 함수
function loadQuestion() {
    // 문제 데이터 가져오기
    const quiz = quizData[currentQuizIndex];

    // 문제 텍스트 설정
    document.getElementById('question').innerHTML = quiz.question;

    // 이미지 설정
    const quizImage = document.getElementById('quiz-image');
    quizImage.src = quiz.image;  // 이미지 경로 설정
    quizImage.style.display = 'block';  // 이미지 보이게 설정

    // 입력칸 초기화
    document.getElementById('answer').value = '';
    document.getElementById('result').innerHTML = '';
    
    // 다음 문제로 넘어가기 위한 버튼 표시
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'block';
}

// 답안 제출 함수
function submitAnswer() {
    const answer = document.getElementById('answer').value;
    const quiz = quizData[currentQuizIndex];
    
    // 정답 확인
    if (answer === quiz.answer) {
        document.getElementById('result').innerHTML = '정답입니다! 🎉';
    } else {
        document.getElementById('result').innerHTML = '틀렸습니다. 다시 시도해주세요.';
    }

    // 정답 보기 버튼 표시
    document.getElementById('show-answer-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'none';
}

// 다음 문제로 이동 함수
function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizData.length) {
        loadQuestion();
    } else {
        alert('퀴즈가 끝났습니다!');
    }
}

// 정답 보기 함수
function showAnswer() {
    const quiz = quizData[currentQuizIndex];
    alert('정답은: ' + quiz.answer);
}
