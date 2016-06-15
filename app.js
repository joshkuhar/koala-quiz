"use strict";

var currentQuestion = 0;
var correctAnswers = 0;

var Questions = [
	{
	question: "About how many hours a day do koala bears sleep?",
	explanation: "Koalas don’t move around much. They sleep almost 18 hours a day. They spend an enormous amount of time napping, so much time that they were once thought to be a type of cat.",
	answers: ["8 hours", "12 hours", "18 hours"],
	photo: "images/koala-smile.jpg",
	correct: "2"
	},			
	{
	question: "About how much do koala bears eat a day?",
	explanation: "When koala bears aren’t sleeping, they’re usually eating eucalyptus leaves, about 2 and a half pounds a day. They eat quite a bit. The average koala weighs about 20 pounds (9 kilograms). That’s a lot of food for such a little creature. A lot of koalas are chubby, too.",
	answers: ["2 and 1/2 pounds (1 kilogram)", "1 pound (1/2 kilogram)", "1/2 a pound (1/5 kilogram)"],
	photo: "images/koala-munching.jpg",
	correct: "0"
	},
	{
	question: "Koala Bears are immune to which of the following?",
	explanation: "Because they eat so many eucalyptus leaves, they never get sore throats. Eucalyptus leaves are the most popular ingredient in cough drops and very effective in preventing coughs and other throat ailments.",
	answers: ["Sneezes", "Sore throats", "Heartburn"],
	photo: "images/cough-drops.jpg",
	correct: "1"
	},
	{
	question: "How many trees does a koala bear need to be happy?",
	explanation: "Koala bears eat so much food they need a small forest just to be happy, about 100 trees. It’s amazing how many trees one koala needs. They also like to nap in the branches.",
	answers: ["20", "100", "200"],
	photo: "images/koala-tree.jpg",
	correct: "1"
	},
	{
	question: "Who is the most famous Koala Bear of all time?",
	explanation: "Blinky Bill is the most famous. Dorthy Wall wrote a book about Blinky way back in 1933. And it’s been selling ever since, at least in Australia. If you've never read Blinky Bill, you should let someone know and because they might be interested in getting you a copy.",
	answers: ["Blinky Bill", "Kathy Koala", "Winnie the Pooh"],
	photo: "images/blinky-bill.jpg",
	correct: "0"
	}
];

function gameOver(){
	$("#instructions, #next, #feedback-yes, #feedback-no, #explanation, #answers, #question, #koala").css("display", "none");
	$("#play-again").css("display", "inline");
}

function changeInitialDisplays(){
	$("#question, form").css("background-color", "#90C3D4");
	//$("#explanation").css("background-color", "#C390D4");
	$("#koala, #nav").css("display", "block");
	$("#submit").css("display", "inline");
	$("#instructions, #next, #feedback-yes, #feedback-no, #explanation").css("display", "none");

}

function submittedDisplays(){
	$("#submit").css("display", "none");
	$("#koala, #nav").css("display", "block");
	$("#next").css("display", "inline");
}


function checkAnswer() {
	var selectedAnswer = $("input[type='radio']:checked", "form").val();
	if (selectedAnswer === Questions[currentQuestion].correct) {
		correctAnswers++;
		$("#score").empty();
  		$("#score").append(correctAnswers);

		$("#feedback-yes").css("display", "block").css("background-color", "#C390D4");
		console.log("This is correct");
	} else {
		$("#feedback-no").css("display", "block").css("background-color", "#C390D4");
		console.log("This is wrong");
	}
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
	$("#explanation").css("display", "block").css("background-color", "#C390D4");
  	$("#explanation").append(Questions[currentQuestion].explanation);
  	
  	$("#photo").append("<img id='koala' src='"+Questions[currentQuestion].photo+ "'alt='picture of a koala'>");
}

function insertAnswers(){
	$("form").empty();
	for (var y = 0; y < Questions[currentQuestion].answers.length; y++){
		$("form").append("<input type='radio' name='radio' value="+y+">"+Questions[currentQuestion].answers[y]+"</br>");
	}
  	
}
$("#start").click(function(event) {
      event.preventDefault();
      insertQuestion();
      insertAnswers();
      changeInitialDisplays();
      $("#photo").empty();
});


// Submit your answer
$("#submit").click(function(event) {
      event.preventDefault();
      insertExplanation();
      submittedDisplays();
      checkAnswer();
});

// Move on to the next question
$("#next").click(function(event) {
      event.preventDefault();
      currentQuestion++;     
      if (currentQuestion < 5) {
		changeInitialDisplays();
		insertAnswers();
      	insertQuestion();
      	$("#photo").empty();
      	questionTracker();
      } else {
      	gameOver();
      }
});

// Start the game over
$("#do-over").click(function(event) {
      event.preventDefault();
      currentQuestion = 0; 
      correctAnswers = 0;
      $("#score").empty();
      $("#score").append(correctAnswers);
      questionTracker();
      $("#do-over").css("display", "none");
      $("#question, #answers").css("display", "block");
      insertQuestion();
      insertAnswers();
      changeInitialDisplays();
      $("#photo").empty();
 
});
/*



*/




