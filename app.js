"use strict";

var currentQuestion = 0;

var Questions = [
	{
	question: "About how many hours a day do koala bears sleep?",
	explanation: "Koalas don’t move around much. They spend an enormous amount of time napping, so much time that they were once thought to be a type of cat.",
	answers: ["8 hours", "12 hours", "18 hours"],
	correct: "18 hours"
	},			
	{
	question: "About how much do koala bears eat a day?",
	explanation: "When koala bears aren’t sleeping, they’re usually eating eucalyptus leaves. They eat quite a bit. The average koala weighs about 20 pounds (9 kilograms). That’s a lot of food for such a little creature. A lot of koalas are chubby, too.",
	answers: ["2 and 1/2 pounds (1 kilogram)", "1 pound (1/2 kilogram)", "1/2 a pound (1/5 kilogram)"],
	correct: "2 and 1/2 pounds (1 kilogram)"
	},
	{
	question: "Koala Bears are immune to which of the following?",
	explanation: "Because they eat so many eucalyptus leaves, they never get sore throats. Eucalyptus leaves are the most popular ingredient in cough drops and very effective in preventing coughs and other throat ailments.",
	answers: ["Sneezes", "Sore throats", "Heartburn"],
	correct: "Sore throats"
	},
	{
	question: "How many trees does a koala bear need to be happy?",
	explanation: "Koala bears eat so much food they need a small forest just to be happy. It’s amazing how many trees one koala needs. They also like to nap in the branches.",
	answers: ["20", "100", "200"],
	correct: "100"
	},
	{
	question: "Who is the most famous Koala Bear of all time?",
	explanation: "Blinky Bill is the most famous. Dorthy Wall wrote a book about Blinky way back in 1933. And it’s been selling ever since, at least in Australia.",
	answers: ["Blinky Bill", "Kathy Koala", "Winnie the Pooh"],
	correct: "Blinky Bill"
	}
];


function checkAnswer() {
	var answer = $("input[type='checkbox']:checked").val();
	console.log(answer);
	}

	
function questionTracker(){
	$("#question-counter").empty();
  	$("#question-counter").append(currentQuestion + 1);
}

function insertQuestion(){
  	$("#question").empty();
  	$("#question").append(Questions[currentQuestion].question);
}

function insertExplanation(){
	$("#explanation").empty();
  	$("#explanation").append(Questions[currentQuestion].explanation);
}


function insertAnswers(){
	$("#answers").empty();
	for (var y = 0; y < Questions[currentQuestion].answers.length; y++){
		$("#answers").append("<li><input id='checkbox' type='checkbox'>  " +Questions[currentQuestion].answers[y]+ "</li>");
	}
  	
}
$("#submit").click(function(event) {
      event.preventDefault();
      insertQuestion();
      insertExplanation();
      insertAnswers();
      currentQuestion++;
      questionTracker()
      
});
/*

var questions = [
    
    {
        question: 'What is your name',
        answers: ['answer1', 'answer2'],
        correct: 'answer1'
    },
    {
        question: 'How old are you',
        answers: ['answer1', 'answer2'],
        correct: 'answer2'
    }
]; 
array of objects 
so first question here is 
questions[0]  
question[0].question
questions[0].answers - you gonna itterate through this and show answers to the users
quesitons[0].correct - you will compare what user clicked in the answers to this, e.g. if(questions[0] === userInput) etc

if(questions[0].correct === userInput)
you will need a global variable called
currentquestion 
initial value 
var currentQuestion  = 0;  
then you will do
question[currentQuestions].whatever
so every time you increment that currentQuestion (if usre answered correctly)
your function will generate a new one
e.g. currentquestion will be 1
which will be second element in your array of questions




$(".new").click(function(event) {
      event.preventDefault();
      resetAllFields();
      secretNum = changeSecretNum(secretNum);
      console.log(secretNum);
    }); 

$("#guessButton").click(function(event) {
      event.preventDefault();
      console.log(previousGuess);
      var guess = $("#userGuess").val();
      // Validate input from game player
      if (guess % guess !== 0) {
        alert("Please enter a number");
        $("#userGuess").val('');
        console.log("not a valid number");
      } 
      else {
        $("#guessList").append("<li> " + guess + " </li>");
        $("#userGuess").val('');
        count++;
        $("#count").empty().append("<span> " +count+ " </span>");
        guessMessage(guess, secretNum);
        previousGuess = guess;
      }
    });    

    $("#userGuess").keyup(function(event){
      if(event.keyCode === 13) {
         event.preventDefault();
      }
 */