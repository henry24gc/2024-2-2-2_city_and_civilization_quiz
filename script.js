let currentQuestion = {}; // 현재 문제 저장

// 문제를 랜덤으로 로드
function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    currentQuestion = quizData[randomIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    // 입력 필드 초기화 및 포커스 설정
    document.getElementById('answer').value = "";
    document.getElementById('answer').focus();

    // 결과 및 버튼 초기화
    document.getElementById('result').textContent = "";
    document.getElementById('submit-btn').style.display = "inline-block";
    document.getElementById('show-answer-btn').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
}

// 정답 제출 처리
function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const resultElement = document.getElementById('result');

    if (userAnswer === currentQuestion.answer) {
        resultElement.textContent = "정답입니다! 🎉";
        resultElement.style.color = "green";
        document.getElementById('next-btn').style.display = "inline-block"; // 다음 문제 버튼 표시
    } else {
        resultElement.textContent = "오답입니다. 다시 시도해보세요! ❌";
        resultElement.style.color = "red";
        document.getElementById('show-answer-btn').style.display = "inline-block"; // 정답 보기 버튼 표시
    }
}

// 정답 보기 기능
function showAnswer() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `정답은: ${currentQuestion.answer}`;
    resultElement.style.color = "blue";
    document.getElementById('next-btn').style.display = "inline-block"; // 다음 문제 버튼 표시
}

// 키보드 입력 처리 (엔터와 Shift+엔터)
function handleKeyPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        submitAnswer(); // 엔터는 제출
    } else if (event.key === "Enter" && event.shiftKey) {
        loadQuestion(); // Shift + 엔터는 다음 문제
    }
}

// 페이지 로드 시 첫 문제 로드
window.onload = loadQuestion;
