const questions = [
    { 
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Fitzgerald", "Austen"],
        correctAnswer: 0 },
    { 
        question: "What is the chemical symbol for gold?",
        options: ["Cu", "Ag", "Fe", "Au"],
        correctAnswer: 3
    }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');
const restartBtn = document.getElementById('restartBtn');

let currentQuestionIndex = 0, score = 0;

function displayQuestion() {
    const { question, options } = questions[currentQuestionIndex];
    questionElement.textContent = question;
    optionsElement.innerHTML = options.map((option, index) => `<button onclick="checkAnswer(${index})">${option}</button>`).join('');
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correctAnswer) score++;
    currentQuestionIndex++;
    currentQuestionIndex < questions.length ? displayQuestion() : showResult();
}

function showResult() {
    submitBtn.style.display = 'none';
    resultElement.textContent = `Your score: ${score}/${questions.length}`;
    resultElement.style.display = 'block';
    restartBtn.style.display = 'block';
}

submitBtn.addEventListener('click', () => checkAnswer());
restartBtn.addEventListener('click', () => {
    currentQuestionIndex = score = 0;
    resultElement.style.display = restartBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    displayQuestion();
});

displayQuestion();
