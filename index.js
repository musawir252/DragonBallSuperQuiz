// Questions that will be asked
const Questions = [{
    q: "What caused Zamasu to realize that Mortals were dangerous?",
    a: [{ text: "Fighting Goku", isCorrect: false },
    { text: "Going to the future by using the time ring and seeing barbaric creatures fight", isCorrect: false },
    { text: "His mentor Gowasu saying that Humans have the capability to change yet no such change happens", isCorrect: false },
    { text: "All of the above", isCorrect: true }
    ]
 
},
{
    q: "What did Zamasu do first to achieve his plans?",
    a: [{ text: "Decided not to act and stayed an apprentice", isCorrect: false, isSelected: false },
    { text: "Teaching people to be better", isCorrect: false },
    { text: "Create a fake Goku", isCorrect: false },
    { text: "Kill his mentor Gowasu to obtain the time ring", isCorrect: true }
    ]
 
},
{
    q: "Who is Goku Black?",
    a: [{ text: "A clone of Goku", isCorrect: false },
    { text: "Goku that is brainwashed ", isCorrect: false },
    { text: "Zamasu stealing Goku's body", isCorrect: true },
    { text: "Goku who doesnt remember who he is", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}