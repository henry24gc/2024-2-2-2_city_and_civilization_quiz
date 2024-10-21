let currentQuestion = {};

function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    currentQuestion = quizData[randomIndex];
    document.getElementById('question').textContent = currentQuestion.question;
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const resultElement = document.getElementById('result');

    if (userAnswer === currentQuestion.answer) {
        resultElement.textContent = "정답입니다! 🎉";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "오답입니다. 다시 시도해보세요! ❌";
        resultElement.style.color = "red";
    }
}

window.onload = loadQuestion;
