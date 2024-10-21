let currentQuestion = {}; // 현재 문제 저장
let usedQuestions = []; // 푼 문제 목록
let results = []; // 정오표 저장

// 문제를 랜덤으로 로드 (중복 방지)
function loadQuestion() {
    if (usedQuestions.length === quizData.length) {
        showSummary(); // 모든 문제를 풀면 결과 요약 표시
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quizData.length);
    } while (usedQuestions.includes(randomIndex)); // 중복 방지

    currentQuestion = quizData[randomIndex];
    usedQuestions.push(randomIndex); // 사용한 문제 기록
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

// 공백과 대소문자를 무시한 비교
function normalizeText(text) {
    return text.replace(/\s+/g, '').toLowerCase();
}

// 정답 제출 처리
function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const normalizedUserAnswer = normalizeText(userAnswer);
    const normalizedCorrectAnswer = normalizeText(currentQuestion.answer);
    const resultElement = document.getElementById('result');

    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

    // 결과 기록 저장
    results.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.answer,
        userAnswer: userAnswer,
        isCorrect: isCorrect
    });

    if (isCorrect) {
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

// 모든 문제를 푼 후 요약 표시
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

// 키보드 입력 처리 (엔터와 Shift+엔터)
function handleKeyPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // 기본 동작 방지 (폼 제출 방지)
        submitAnswer(); // 엔터는 제출
    } else if (event.key === "Enter" && event.shiftKey) {
        event.preventDefault(); // 기본 동작 방지
        loadQuestion(); // Shift + 엔터는 다음 문제
    }
}

// 페이지 로드 시 첫 문제 로드
window.onload = loadQuestion;
