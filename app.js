//creating an array containing each set of question and answer in an object
let questions=[
    {
        question:'What are baby lions called?',
        a:'Puppies',
        b:'Cubs',
        c:'Ducklings',
        d:'Kittens',
        correct: 'Cubs'
    },
    {
        question:'How many legs does an octopus have?',
        a:'Nine',
        b:'Two',
        c:'Eight',
        d:'Seven',
        correct: 'Eight'  
    },
    {
        question:'Which is the fastest animal?',
        a:'Elephant',
        b:'Cheetah',
        c:'Dog',
        d:'Leopard',
        correct: 'Cheetah'  
    },
    {
        question:'Which animal never sleeps?',
        a:'Ostrich',
        b:'Bullfrog',
        c:'sloth',
        d:'Gazelle',
        correct: 'Bullfrog'  
    },
    {
        question:'What is a male Zebra called?',
        a:'Stag',
        b:'bull',
        c:'Stallion',
        d:'Seven',
        correct: 'Stallion'  
    }
]
let startbtn = document.getElementById('start');//start button
let startpagebox = document.querySelector('.startpagebox');
let questionpagebox = document.querySelector('.questionpagebox');
let timerBox = document.querySelector('.timer');
let congratsPage = document.querySelector('.endpage');
let currentQuestion= 0;
let question1 = document.querySelector('.question1');
let answer=document.querySelectorAll('answer');
let answera =  document.querySelector('.answera');
let answerb = document.querySelector('.answerb');
let answerc = document.querySelector('.answerc');
let answerd = document.querySelector('.answerd');
let nextButton = document.getElementById('nextbtn1');//next 
let currentQuestionData= questions[currentQuestion];
var timerProgress;
let score =0;
let scoreValue = document.getElementById('displayScore'); 
let returnButton = document.getElementById('return');

//let timerbtn= document.querySelectorAll(".timerbtn");// timerbtn attached to the start and next button
let timerBtns = [startbtn,nextButton];
    console.log(timerBtns);

//Timerbars
let timerContainer = document.querySelector(".timer");
let timerCountdown = document.querySelector(".timerbar1");
let timerValue = document.querySelector(".timerbarvalue");

const progressValue=60;//setting where timershould start
let countdownValue = progressValue;
const endValue= 0; //setting where timer should end
let timerSpeed = 500;// how many secs should each increment 
let incrementSpeed= 60000;


function stopCount() {
    timerCountdown.style.background = `conic-gradient(#FF4500 ${countdownValue * 6}deg, #FFAA33 ${countdownValue * 6}deg)`;
    clearInterval(timerProgress)
}


function startCount() {
    countdownValue = progressValue

    timerProgress = setInterval( function(){
    countdownValue--;
    console.log(countdownValue)
    timerValue.textContent= countdownValue;
    timerCountdown.style.background = `conic-gradient(#FF4500 ${countdownValue * 6}deg, #FFAA33 ${countdownValue * 6}deg)`;
    if (countdownValue == endValue){
        clearInterval(timerProgress);
        document.getElementById("nextbtn1").style.visibility = 'visible';
        disableAnswers()
        highlightCorrectAnswer()
    }
}, timerSpeed);
};



/* this causes count to go into negative range
timerBtns.forEach(function(btn){
    btn.addEventListener(onclick, ()=>{
        let progressValue= 60;
        //getting the condown animation using a conical gradient

    })
});

*/
/*what i want:
for when you click each button(next and start) the coundown timer to restart from 60sec
1. get each button
2. put them in an array?
3. add eventlistener to listen for click of each button
4.when clicked, timer should restart */

//getting answer slots
let allAnswers = document.querySelectorAll('.answer');
console.log(answera);
//console.log(allAnswers);

//The START Button 
startbtn.addEventListener('click', function()
{
    startpagebox.style.display='none';
    timerBox.style.display= 'flex';
    questionpagebox.style.display= 'flex';
    loadQuestion();
   
});

//Filling in each question and answer slot when a question page is loaded using the data from questions variable
//the current set of data is set at index of 0(currentQuestion var)
function loadQuestion(){
    deselect()
    enableAnswers()
    startCount();
    document.getElementById("nextbtn1").style.visibility = 'hidden';
    currentQuestionData= questions[currentQuestion];
    question1.textContent= currentQuestionData.question;
    answera.textContent= currentQuestionData.a;
    answerb.textContent= currentQuestionData.b;
    answerc.textContent= currentQuestionData.c;
    answerd.textContent= currentQuestionData.d;

    // if (countdownValue==endValue){
    //     currentQuestionData =questions[currentQuestion++];
    // }
 } 

 //correct answer:
//loop through each question in the questions array
 let currentResponse = Array.from(allAnswers).forEach(function(answer){
        
        answer.addEventListener('click', function (e) {
            e.target.textContent;//prints clicked answer option
            console.log(e.target.textContent)
            console.log(e.target)
            stopCount()
            

        function checkAnswer() {
            //for (i=0; i<questions.length-1; i++) 

            if (e.target.textContent === currentQuestionData.correct) {
                //currentQuestion++;
                console.log('correct')//prints correct if the clicked option is the answer and changes background to green
                e.target.style.backgroundColor = 'green';
                score++; // increases the score when ans correct
                console.log('score is '+ `${score}`);
                    
                    //loadQuestion(); //loads next question automatically
                //deselect();

                
            }  
            else {
                score=score+0; 
                //currentQuestion++;
                
                e.target.style.background = 'red';
                console.log('wrong')
                highlightCorrectAnswer()
                //loadQuestion();
            //deselect();
            }
            //currentQuestion++;
            //loadQuestion();
            //deselect()
        }   

            checkAnswer()
            document.getElementById("nextbtn1").style.visibility = 'visible';
            disableAnswers()
            
            //deselect()
        })
    })
    
    function deselect(){
       Array.from(allAnswers).forEach((answer)=>{
        answer.style.background = 'white'
        })
    }

    function disableAnswers(){
        Array.from(allAnswers).forEach((answer)=>{
         answer.style.pointerEvents = "none";
         })
     }

    function enableAnswers(){
        Array.from(allAnswers).forEach((answer)=>{
         answer.style.pointerEvents = "auto";
         })
    }

    function highlightCorrectAnswer(){
        Array.from(allAnswers).forEach((answer)=>{
            if (answer.textContent === currentQuestionData.correct) {
                answer.style.backgroundColor = 'green'
            }
         })
     }
  

 
//if ( currentResponse== questions[i].correct.textContent){
 //   console.log('correct answer');//access question that is being looped through
//};};}
//checkAnswer()
 //Arrayfrom(forEach answer.addEventListener('click', function (e){
 //   console.log(e.target.textContent);
// }
//)

/*function loadQuestion(){let jump = setInterval(function(){
    currentQuestionData= questions[currentQuestion];
 question1.textContent= currentQuestionData.question;
 answera.textContent= currentQuestionData.a;
 answerb.textContent= currentQuestionData.b;
 answerc.textContent= currentQuestionData.c;
 answerd.textContent= currentQuestionData.d;
 
 if(currentQuestion >questions.length-1){
    currentQuestion++;
 clearInterval(jump)} 
 } 
,incrementSpeed)
};
*/
function displayScore() //displays score at end of quiz
{ 
    scoreValue.textContent = 'You scored '+ score + '/' + `${questions.length}`;
}

function nextQuestions() {
    currentQuestion++;
    console.log(currentQuestion);
    return currentQuestion
}

returnButton.addEventListener('click',
 function(){
    
        currentQuestion=0;
        startpagebox.style.display='flex';
        congratsPage.style.display='none';
    }
);

//Next Button
nextButton.addEventListener('click', function(){
    // currentQuestion++;
    // console.log(currentQuestion);
    // if (currentQuestion>questions.length-1){
    // questionpagebox.style.display= 'none';
    // timerBox.style.display= 'none ';
    // congratsPage.style.display='flex';
 
    // } 
    //progressValue=60; // restarting countdown timer when the next button is clicked

    let currentQuest = nextQuestions()
    if (currentQuest>questions.length-1){
        questionpagebox.style.display= 'none';
        timerBox.style.display= 'none ';
        congratsPage.style.display='flex';
        stopCount()
        displayScore()
    } 
    //nextQuestions()
    else {
        loadQuestion();
    }
    
    //jumper1

});


/* this cause countdown to go into negatives
let jumper1= setInterval(
 function jumper(){
 startCount();
    loadQuestion();
    if(currentQuestion>questions.length-1){
        clearInterval(jumper1)
    };
}
,incrementSpeed)
*/
/*let skip= function(){
if (progressValue== endValue){
currentQuestion= currentQuestion + 1;
}

}
function questionTimeout(){
    if(currentQuestion <questions.length-1){
       on  currentQuestion++
    } else{
        currentQuesti= 0
    }
    setTimeout(questionTimeout(), timerSpeed);
}
*/
//startbtn.addEventListener("click",questionTimeout());

/*
timerBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
    let timer = setInterval(barCountdown, 2000);

    function barCountdown(){
let min=0 + "%";
        if (timerbar1.style.width <timerbar2.style.width)
        {timerbar1.style.width = 1+ "%";
        timerbar1.style.height = 0.1 + "em";
            console.log(timerbar1.style.width)}}
    });
});*/


//https://codepen.io/lincohn/pen/JjPZgXw 
//https://csshint.com/css-glow-effects/