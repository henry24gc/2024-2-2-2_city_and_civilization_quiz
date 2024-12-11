let currentQuestion = {};
let usedQuestions = [];
let results = [];
let isRandomMode = true; // 기본값은 랜덤 모드
let currentIndex = 0; // 순서 모드에서 사용할 인덱스

// 모드 선택 후 시작
function startQuiz(mode) {
    isRandomMode = mode === "random";
    currentIndex = 0; // 순서 모드 초기화
    usedQuestions = []; // 이전 데이터 초기화
    results = []; // 결과 초기화

    // 모드 선택 화면 숨기고 문제 풀이 화면 표시
    document.getElementById('mode-selection').style.display = "none";
    document.getElementById('quiz-container').style.display = "block";

    loadQuestion();
    updateProgress();
}

// 진행 상황 업데이트
function updateProgress() {
    const progress = `${usedQuestions.length} / ${quizData.length} 문제 완료`;
    document.getElementById('progress').textContent = progress;
}

// 랜덤 문제 로드 (중복 방지)
function loadRandomQuestion() {
    if (usedQuestions.length === quizData.length) {
        showSummary();
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quizData.length);
    } while (usedQuestions.includes(randomIndex));

    currentQuestion = quizData[randomIndex];
    usedQuestions.push(randomIndex);

    displayQuestion();
}

// 순서대로 문제 로드
function loadSequentialQuestion() {
    if (currentIndex >= quizData.length) {
        showSummary();
        return;
    }

    currentQuestion = quizData[currentIndex];
    usedQuestions.push(currentIndex);
    currentIndex++;

    displayQuestion();
}

// 문제 로드
function loadQuestion() {
    if (isRandomMode) {
        loadRandomQuestion();
    } else {
        loadSequentialQuestion();
    }
}

// 질문과 입력 필드 초기화
function displayQuestion() {
    document.getElementById('question').innerHTML = currentQuestion.question;
    clearAnswerInput();
    resetResult();
    updateProgress();
    resetLayout();
}

// 입력 필드와 포커스 초기화
function clearAnswerInput() {
    const answerInput = document.getElementById('answer');
    answerInput.value = "";
    answerInput.blur();
    setTimeout(() => answerInput.focus(), 0);
}

// 나머지 기존 함수는 그대로 유지...


// 공백과 대소문자 무시한 비교
function normalizeText(text) {
    return text.replace(/\s+/g, '').toLowerCase();
}

// 정답 제출 처리
function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const isCorrect = normalizeText(userAnswer) === normalizeText(currentQuestion.answer);

    const existingResult = results.find(r => r.question === currentQuestion.question);
    if (!existingResult) {
        results.push({
            question: currentQuestion.question,
            correctAnswer: currentQuestion.answer,
            userAnswer: userAnswer,
            isCorrect: isCorrect
        });
    }

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

// 정답 보기 기능 + 이미지도 같이
function showAnswer() {
    const resultElement = document.getElementById('result');
    const resultImage = document.getElementById('result-image');

    resultElement.textContent = `정답은: ${currentQuestion.answer}`;
    resultElement.style.color = "blue";

    if (currentQuestion.image) {
        resultImage.src = currentQuestion.image;
        resultImage.style.display = "block";
    } else {
        resultImage.style.display = "none"; // 이미지가 없으면 숨김
    }

    document.getElementById('next-btn').style.display = "inline-block";
}

// 요약 표시 및 레이아웃 변경
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
        
        // 정오 여부 컬럼에 스타일 적용
        const correctStatus = result.isCorrect ? "정답" : "오답";
        const statusColor = result.isCorrect ? "blue" : "red"; // 정답은 파란색, 오답은 빨간색

        row.innerHTML = `
            <td>${result.question}</td>
            <td>${result.correctAnswer}</td>
            <td>${result.userAnswer || "미제출"}</td>
            <td style="color: ${statusColor};">${correctStatus}</td>
        `;
        resultTable.appendChild(row);
    });

    summaryDiv.appendChild(resultTable);
    summaryDiv.style.display = "block";

    // 넓은 레이아웃 적용
    document.getElementById('container').style.maxWidth = "90%";
}


// 기본 레이아웃 복원
function resetLayout() {
    document.getElementById('container').style.maxWidth = "600px";
}

// 결과 메시지 초기화
function resetResult() {
    document.getElementById('result').textContent = "";
    document.getElementById('submit-btn').style.display = "inline-block";
    document.getElementById('show-answer-btn').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
}

// 키보드 이벤트 처리
function handleKeyPress(event) {
    if (event.key === "Enter" && !event.shiftKey && !event.ctrlKey) {
        event.preventDefault();
        submitAnswer(); // 기본 Enter: 정답 제출
    } else if (event.key === "Enter" && event.shiftKey) {
        event.preventDefault();
        loadQuestion(); // Shift + Enter: 다음 문제로 이동
    } else if (event.key === "Enter" && event.ctrlKey) {
        event.preventDefault();
        showAnswer(); // Ctrl + Enter: 정답 보기
    }
}

