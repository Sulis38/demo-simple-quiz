// data kuis
var quizData = [
    {
        question: "Dimana UPI Bumisiliwangi?",
        choices: ["Bandung","Tasik","Mars"],
        answer: "Bandung",
    },
    {
        question: "Fisika pusing atau stress?",
        choices: ["Pusing","Stress","Pusing+stress"],
        answer: "Pusing+stress",
    },
    {
        question: "Bagaimana ketahanan gedung JICA FPMIPA UPI?",
        choices: ["Lemah","Kuat","Tahan terhadap gempa"],
        answer: "Tahan terhadap gempa",
    },
    ];
    
    // membuat variabel untuk menampung
    var quizContainer=document.getElementById("quiz");
    var questionContainer=document.getElementById("question");
    var choicesContainer=document.getElementById("choices");
    var submitButton=document.getElementById("submitButton"); // Changed the id name from "submitButton1" to "submitButton"
    var resultContainer=document.getElementById("result");
    var currentQuestion = 0;
    var score = 0;
    
    // menampilkan pertanyaan dan pilihan jawaban
    function displayQuestion(){
    var currentQuiz=quizData[currentQuestion];
    questionContainer.textContent=currentQuiz.question;
        
    choicesContainer.innerHTML = "";
    
    currentQuiz.choices.forEach(function (choice){
        var label=document.createElement("label");
        var radio = document.createElement("input");
        radio.type="radio";
        radio.name="quiz";
        radio.value= choice;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(choice));
        choicesContainer.appendChild(label);
    
    });
    
    }
    // cek jawaban dan tampil hasil
    function checkAnswer(){
    var selectedOption=document.querySelector('input[name="quiz"]:checked'); // Changed the variable name from "selectOption" to "selectedOption"
    if (!selectedOption){
    alert("Silakan pilih jawaban"); // Corrected the alert message
    return;
    }
    
    var answer=selectedOption.value;
    if(answer == quizData[currentQuestion].answer){
        score++;
    }
    
    currentQuestion++;
    
    if(currentQuestion === quizData.length){
        quizContainer.style.display="none";
        resultContainer.textContent = "Your score: " + score + " dari " + quizData.length + " pertanyaan.";
    } else {
        displayQuestion();
    }
    
    
    }
    
    // event listener ketika submit
    submitButton.addEventListener("click",checkAnswer);
    console.log(score);
    
    // tampilkan pertanyaan
    displayQuestion();