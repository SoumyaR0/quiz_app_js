const quizData = [
    {
        question: "Which of the following is a client-side language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    },
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "JQuery",
        c: "CSS",
        d: "XML",
        correct: "c",
    },
    {
        question: "Which is not a JavaScript Framework?",
        a: "Python Script",
        b: "JQuery",
        c: "Django",
        d: "NodeJS",
        correct: "c",
    },
    {
        question: "Which is used for Connect To Database?",
        a: "PHP",
        b: "HTML",
        c: "JS",
        d: "All",
        correct: "a",
    },
    {
        question: "Which of the following is a backend language?",
        a: "HTML",
        b: "Python",
        c: "CSS",
        d: "JavaScript",
        correct: "b",
    },
    {
        question: "Which tool can you use to ensure code quality?",
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",
        correct: "d",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javascript>",
        correct: "c",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "style",
        b: "font",
        c: "class",
        d: "styles",
        correct: "a",
    },
    {
        question: "Which is not a JavaScript data type?",
        a: "String",
        b: "Number",
        c: "Boolean",
        d: "Character",
        correct: "d",
    },
    {
        question: "Which company developed JavaScript?",
        a: "Netscape",
        b: "Bell Labs",
        c: "Sun Microsystems",
        d: "IBM",
        correct: "a",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        a: "interface",
        b: "throws",
        c: "program",
        d: "short",
        correct: "c",
    },
    {
        question: "What is the original name of JavaScript?",
        a: "LiveScript",
        b: "EScript",
        c: "Mocha",
        d: "JavaScript",
        correct: "c",
    },
    {
        question: "Which is not a JavaScript looping structure?",
        a: "for",
        b: "while",
        c: "foreach",
        d: "loop",
        correct: "d",
    },
    {
        question: "What is the main use of JavaScript in web development?",
        a: "Structure",
        b: "Styling",
        c: "Functionality",
        d: "Database",
        correct: "c",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function:myFunction()",
        b: "function = myFunction()",
        c: "function myFunction()",
        d: "createFunction()",
        correct: "c",
    },
    {
        question: "How do you call a function named 'myFunction'?",
        a: "call myFunction()",
        b: "myFunction()",
        c: "call function myFunction()",
        d: "Call.myFunction()",
        correct: "b",
    },
    {
        question: "How to write an 'if' statement in JavaScript?",
        a: "if i = 5 then",
        b: "if i == 5 then",
        c: "if (i == 5)",
        d: "if i = 5",
        correct: "c",
    },
    {
        question: "How does a 'for' loop start?",
        a: "for (i = 0; i <= 5)",
        b: "for i = 1 to 5",
        c: "for (i <= 5; i++)",
        d: "for (i = 0; i <= 5; i++)",
        correct: "d",
    },
    {
        question: "How can you add a comment in JavaScript?",
        a: "'This is a comment",
        b: "// This is a comment",
        c: "<!--This is a comment-->",
        d: "# This is a comment",
        correct: "b",
    },
    {
        question: "How to insert a multi-line comment in JavaScript?",
        a: "/*This comment has multiple lines*/",
        b: "//This comment has multiple lines//",
        c: "<!--This comment has multiple lines-->",
        d: "#This comment has multiple lines#",
        correct: "a",
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        b: "var colors = (1:'red', 2:'green', 3:'blue')",
        c: "var colors = ['red', 'green', 'blue']",
        d: "var colors = 'red', 'green', 'blue'",
        correct: "c",
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        a: "ceil(x, y)",
        b: "Math.ceil(x, y)",
        c: "Math.max(x, y)",
        d: "top(x, y)",
        correct: "c",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onchange",
        b: "onclick",
        c: "onmouseclick",
        d: "onmouseover",
        correct: "b",
    },
    {
        question: "How do you declare a JavaScript variable?",
        a: "var carName",
        b: "variable carName",
        c: "v carName",
        d: "var = carName",
        correct: "a",
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        a: "*",
        b: "-",
        c: "=",
        d: "x",
        correct: "c",
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        a: "true",
        b: "false",
        c: "NaN",
        d: "undefined",
        correct: "a",
    },
    {
        question: "Is JavaScript case-sensitive?",
        a: "No",
        b: "Yes",
        c: "Sometimes",
        d: "None of the above",
        correct: "b",
    }
];

let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;

let questionBox = document.getElementById("questionBox");
let questionCount = document.getElementById("questionCount");
let allInputs = document.querySelectorAll("input[type='radio']");
let feedbackBox = document.getElementById("feedbackBox");

const loadQuestion = () => {
    if (total === index) {
        return quizEnd();
    }
    reset();
    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    questionCount.innerHTML = `Question ${index + 1} of ${total}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index];
        const ans = getAnswer();
        if (ans === data.correct) {
            correct++;
            feedbackBox.innerHTML = "<p style='color: green;'>Correct!</p>";
        } else {
            incorrect++;
            feedbackBox.innerHTML = "<p style='color: red;'>Incorrect!</p>";
        }
        index++;
        setTimeout(() => {
            feedbackBox.innerHTML = "";
            loadQuestion();
        }, 1000);
    }
);

document.querySelector("#skip").addEventListener(
    "click",
    function() {
        index++;
        loadQuestion();
    }
);

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    document.querySelector(".container").innerHTML = `
        <div class="col">
            <h3>You've completed the quiz!</h3>
            <p>Total questions: ${total}</p>
            <p>Correct answers: ${correct}</p>
            <p>Incorrect answers: ${incorrect}</p>
        </div>
    `;
}


loadQuestion();