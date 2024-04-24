const startButton = document.getElementById("startButton");
const introContainer = document.getElementById("introContainer");
const introText = document.getElementById("introText");
const questionContainer = document.getElementById("questionContainer");
const question = document.getElementById("question");
const answersList = document.getElementById("answers");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const americaHymnButton = document.getElementById("americaHymn");
const stopHymnButton = document.getElementById("stopHymn");


const americaHymnAudio = new Audio("israel.mp3"); 

americaHymnButton.addEventListener("click", () => {
    americaHymnAudio.play();
});


stopHymnButton.addEventListener("click", () => {
    americaHymnAudio.pause();
});



const questions = [
    {
        questionText: "Která biblická postava je považována za zakladatele judaismu?",
        answers: [
            { text: "Abraham", correct: true },
            { text: "Mojžíš", correct: false },
            { text: "David", correct: false },
            { text: "Šalomoun", correct: false }
        ]
    },
    {
        questionText: "Jaký je hlavní judaistický náboženský text?",
        answers: [
            { text: "Talmud", correct: false },
            { text: "Tanach", correct: true },
            { text: "Kabala", correct: false },
            { text: "Midraš", correct: false }
        ]
    },
    {
        questionText: "Jaké jsou hlavní symboly judaismu?",
        answers: [
            { text: "Koruna a meč", correct: false },
            { text: "Kříž a svícen", correct: false },
            { text: "Davidova hvězda a menorah", correct: true },
            { text: "Kamenné desky a fíkovník", correct: false }
        ]
    },
    {
        questionText: "Co je tóra?",
        answers: [
            { text: "Svatební smlouva", correct: false },
            { text: "Svítání", correct: false },
            { text: "Zákon a učení obsažené v prvních pěti knihách Bible", correct: true },
            { text: "Modlitba před jídlem", correct: false }
        ]
    },
    {
        questionText: "Který je první den v židovském kalendáři?",
        answers: [
            { text: "Šabat", correct: false },
            { text: "Róš ha-šana", correct: true },
            { text: "Jom kipur", correct: false },
            { text: "Purim", correct: false }
        ]
    },
    {
        questionText: "Jak se nazývá židovský nový rok?",
        answers: [
            { text: "Chanuka", correct: false },
            { text: "Pesach", correct: false },
            { text: "Róš ha-šana", correct: true },
            { text: "Sukot", correct: false }
        ]
    },
    {
        questionText: "Co je Bar micva?",
        answers: [
            { text: "Liturgický zpěv", correct: false },
            { text: "Pilíř judaismu", correct: false },
            { text: "Oslava získání dospělosti pro židovského chlapce", correct: true },
            { text: "Modlitba na konci Šabatu", correct: false }
        ]
    },
    {
        questionText: "Jaký je hlavní dům modlitby v judaismu?",
        answers: [
            { text: "Synagoga", correct: true },
            { text: "Chrám", correct: false },
            { text: "Katedrála", correct: false },
            { text: "Mecit", correct: false }
        ]
    },
    {
        questionText: "Kdo je rabín?",
        answers: [
            { text: "Židovský básník", correct: false },
            { text: "Židovský kněz", correct: false },
            { text: "Duchovní vůdce a učitel v judaismu", correct: true },
            { text: "Židovský král", correct: false }
        ]
    },
    {
        questionText: "Co je šabat?",
        answers: [
            { text: "Název pro svatební hostinu", correct: false },
            { text: "Židovský pracovní den", correct: false },
            { text: "Židovský svátek a den odpočinku, trvající od západu slunce v pátek do západu slunce v sobotu", correct: true },
            { text: "Název pro židovské svatební dary", correct: false }
        ]
    }
];


let currentQuestionIndex = 0;
let correctAnswers = 0;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    introContainer.style.display = "block";
    introContainer.style.animation = "fadeIn 2s";
    introText.innerText = "Vítejte! Přeneste se s námi do hlubin judaismu. Nacházíme se v době, kdy je třeba chránit naše víry a tradice. Pomozte nám prozkoumat judaismus a jeho dědictví otázkami, které přinesou světlo do temnot okupace a umožní nám prozkoumat naše kořeny a identitu.";
    

    setTimeout(() => {
        introContainer.style.animation = ""; 
        introContainer.style.display = "none";
        questionContainer.style.display = "block";
        questionContainer.style.animation = "slideIn 1s"; 
        
        setTimeout(() => {
            showQuestion(currentQuestionIndex);
        }, 1000); 
    }, 20000); 
});

function showQuestion(questionIndex) {
    questionContainer.style.animation = "slideIn 1s";
    const currentQuestion = questions[questionIndex];
    question.innerText = currentQuestion.questionText;
    answersList.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const answerItem = document.createElement("li");
        answerItem.innerHTML = `<input type="radio" name="answer" value="${index}"> ${answer.text}`;
        answersList.appendChild(answerItem);
    });

    checkButton.disabled = false;
}

checkButton.addEventListener("click", () => {
    const selectedAnswerInput = document.querySelector("input[name='answer']:checked");

    if (!selectedAnswerInput) {
        result.textContent = "Vyberte odpověď.";
        return;
    }

    const selectedAnswerIndex = parseInt(selectedAnswerInput.value);
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.answers[selectedAnswerIndex].correct) {
        correctAnswers++;
        result.textContent = "Správně!";
    } else {
        result.textContent = "Chyba, správná odpověď je: " + currentQuestion.answers.find(answer => answer.correct).text;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        checkButton.disabled = true;
        const totalQuestions = questions.length;
        const incorrectAnswers = totalQuestions - correctAnswers;

        result.textContent = `Konec hry! Správných odpovědí: ${correctAnswers}/${totalQuestions}`;
    }
});


startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    introContainer.style.display = "block";
    introText.innerText = "Vítejte! Přeneste se s námi do hlubin judaismu. Nacházíme se v době, kdy je třeba chránit naše víry a tradice. Pomozte nám prozkoumat judaismus a jeho dědictví otázkami, které přinesou světlo do temnot okupace a umožní nám prozkoumat naše kořeny a identitu.";
    setTimeout(() => {
        introContainer.style.display = "none";
        questionContainer.style.display = "block";
        showQuestion(currentQuestionIndex);
    }, 5000); // 5000 ms = 5 sekund
});
