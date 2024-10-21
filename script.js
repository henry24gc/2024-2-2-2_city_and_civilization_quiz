let currentQuestion = {}; // 현재 문제 저장
let usedQuestions = []; // 이미 푼 문제 인덱스 저장
let results = []; // 정답 결과 저장

// 공백과 대소문자 무시한 비교 함수
function normalizeText(text) {
    return text.replace(/\s+/g, '').toLowerCase();
}

// 랜덤 문제 로드 (중복 방지)
function loadQuestion() {
    if (usedQuestions.length === quizData.length) {
        showSummary(); // 모든 문제를 풀면 요약 표시
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quizData.length);
    } while (usedQuestions.includes(randomIndex)); // 중복 방지

    currentQuestion = quizData[randomIndex];
    usedQuestions.push(randomIndex); // 사용된 문제 기록

    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('answer').value = ""; // 입력 초기화
    document.getElementById('answer').focus(); // 입력 포커스 설정

    // 결과 및 버튼 초기화
    document.getElementById('result').textContent = "";
    document.getElementById('submit-btn').style.display = "inline-block";
    document.getElementById('show-answer-btn').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
}

// 정답 제출 처리
function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const isCorrect = normalizeText(userAnswer) === normalizeText(currentQuestion.answer);

    // 결과 기록 저장
    results.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.answer,
        userAnswer: userAnswer,
        isCorrect: isCorrect
    });

    const resultElement = document.getElementById('result');
    if (isCorrect) {
        resultElement.textContent = "정답입니다! 🎉";
        resultElement.style.color = "green";
        document.getElementById('next-btn').style.display = "inline-block";
    } else {
        resultElement.textContent = "오답입니다. 다시 시도해보세요! ❌";
        resultElement.style.color = "red";
        document.getElementById('show-answer-btn').style.display = "inline-block";
    }
}

// 정답 보기 기능
function showAnswer() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `정답은: ${currentQuestion.answer}`;
    resultElement.style.color = "blue";
    document.getElementById('next-btn').style.display = "inline-block";
}

// 모든 문제 완료 후 요약 표시
function showSummary() {
    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = "<h2>모든 문제를 완료했습니다!</h2>";

    const resultTable = document.createElement('table');
    resultTable.innerHTML = `
        <tr>
            <th>문제</th>
            <th>정답</th>
            <th>내 답변</th>
            <th>정오 여부</th>
        </tr>
    `;

    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.question}</td>
            <td>${result.correctAnswer}</td>
            <td>${result.userAnswer || "미제출"}</td>
            <td>${result.isCorrect ? "정답" : "오답"}</td>
        `;
        resultTable.appendChild(row);
    });

    summaryDiv.appendChild(resultTable);
    summaryDiv.style.display = "block"; // 요약 표시
}

// 키보드 이벤트 처리 (엔터와 Shift+엔터)
function handleKeyPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // 기본 동작 방지
        submitAnswer();
    } else if (event.key === "Enter" && event.shiftKey) {
        event.preventDefault(); // 기본 동작 방지
        loadQuestion();
    }
}

// 페이지 로드 시 첫 문제 로드
window.onload = loadQuestion;
