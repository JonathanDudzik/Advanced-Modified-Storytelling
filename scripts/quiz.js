//declaring variables for easier DOM navigation
var navButton = document.getElementById("navButton");
var retakeButton = document.getElementById("retakeButton");
var DownloadButton = document.getElementById("DownloadButton");
var questionText = document.getElementById("questionText");

//creating question objects - ADD question explanations property to each object.
var question1 = {
  question: 'The Haft Paykar, or Seven Portraits tells the story if seven portraits of seven princesses. What did these seven princesses represent?',
  answers: ["Seven Climes of Antiquity.", "Seven domed pavilions", "Seven aspects of self-knowledge"],
  explanation: "According to legend, the seven portraits of seven princesses represented the Seven Climes of Antiquity.",
  correct: 0
};
var question2 = {
  question: "Early on in this trainig portal, the Arabian Nights was introduced. Who were told which which kind of people?",
  answers: ["The richest segments of ancient society","Children under 10 years old","Adults living throughout Asia, Arabia, and Persia"],
  explanation: "The Arabian Nights, are only fairy tales of the East. The people of Asia, Arabia, and Persia told them in their own way, not for children, but for grown-up people.",
  correct: 2
};
var question3 = {
  question: "The timeline looked at the history of The Arabian Nights stories. What was the most recent event related to the Arabian Nights that was given in the timeline?",
  answers: ["The 1992 film Aladdin was released by Walt Disney Pictures", "New Penguin Classics translation by Malcolm C. Lyons and Ursula Lyons was published in 2008", "The 1918 edition of The Arabian Nights Entertainments by Andrew Lang was published"],
  explanation:'Penguin Classics published the The Arabian Nights: Tales of 1,001 Nights in 2008 was the final event covered in the timeline.',
  correct: 1
};
 var question4 = {
  question: "The final section of this portal retells the story of which of the following characters?",
  answers: ["Aladdin and the Wonderful Lamp", "Sindbad the Sailor", "The Story of the Merchant and the Genius",],
  explanation:'Remember this line from our last stroy: "In the place of honour sat a tall, grave man whose long white beard gave him a venerable air. Behind his chair stood a crowd of attendants eager to minister to his wants. This was the famous Sindbad himself."',
  correct: 1
};

//declaring the variable of all questions
var allQuestions = [question1, question2, question3, question4,];

//Display the first question's text and the possible answers. 
questionText.innerHTML = allQuestions[0].question;
document.getElementById("choice1").innerHTML = allQuestions[0].answers[0]; 
document.getElementById("choice2").innerHTML = allQuestions[0].answers[1];
document.getElementById("choice3").innerHTML = allQuestions[0].answers[2];


// variable to hold the number of the current question
var currentNum = 0;

//variable to hold the users number of correct answers
var totalScore = 0;

//calling the main quiz function with the first click of the navButton
//I use the .onclick in this js file instead of in the HTML
document.getElementById("navButton").onclick = function quizFunction() {
  
  //declaring the variable that retreives the user's selected radio button
  var selectedOption = document.querySelector('input[name="answer"]:checked').value;
  
  //Displays feedback
  var feedbackShowAnswer = document.querySelector('.popup__feedback-answer');
  var feedbackShowExplanation = document.querySelector('.popup__feedback-explanation');
  var feedbackShowTotal = document.querySelector('.popup__feedback-total');
  document.location.href="#feedback-show";
  if (selectedOption == allQuestions[currentNum].correct) {
    totalScore++;
    feedbackShowAnswer.innerHTML="That is correct:"
    feedbackShowExplanation.innerHTML=(allQuestions[currentNum].explanation)
    feedbackShowTotal.innerHTML=" Your score is " + totalScore + ' of ' + allQuestions.length;
  } else {
    feedbackShowAnswer.innerHTML="That is incorrect:"
    feedbackShowExplanation.innerHTML=(allQuestions[currentNum].explanation)
    feedbackShowTotal.innerHTML="Your score is " + totalScore + ' of ' + allQuestions.length;
  }
  
  // goes through the form and unchecks each answer - needed in EI
  var optionGroup = document.forms["questionForm"]["answer"];
  for (var i = 0; i < optionGroup.length; i++) {
    optionGroup[i].checked = false;
  }
  
  //runs if not the final question
  currentNum++;
  
  //this statement will execute if all questions have been answered AND the score is higher than the threshold
  if (currentNum == allQuestions.length && totalScore >= (allQuestions.length*0.75)) {
    document.getElementById("questionForm").classList.add("u-quiz-hide"); //hides the HTML form containing the questions
    questionText.innerHTML = "Your score is " + totalScore + " of " + allQuestions.length + " You may now download your certificate.";
    navButton.classList.add("u-quiz-hide"); //hides the button used to execute this function
    DownloadButton.classList.remove("u-quiz-hide"); //reveals the <a> tag, that looks like a button, for downloading the file
   
	//this statement will execute if all questions have been answered BUT the score is below the threshold
	} else if (currentNum == allQuestions.length && totalScore < (allQuestions.length*0.75)) {
    document.getElementById("questionForm").classList.add("u-quiz-hide"); //again, hides the form containing the questions
    questionText.innerHTML = "Your score is " + totalScore + " out of " + allQuestions.length + ". You must get at least 75% of the questions right in order to download the training certificate. Please click the button below to retake the quiz.";
    navButton.classList.add("u-quiz-hide"); //as above, hides the button used to execute this function
  
	//this statement executes only when not all questions have been answered. This is the code used for dynamically populating the question and answers in the quiz
	} else {
      questionText.innerHTML = allQuestions[currentNum].question;
      document.getElementById("choice1").innerHTML = allQuestions[currentNum].answers[0];
      document.getElementById("choice2").innerHTML = allQuestions[currentNum].answers[1];
      document.getElementById("choice3").innerHTML = allQuestions[currentNum].answers[2];
  }
};

//reset the quiz back to initial state - reloading the page is a bad idea in everyway.
retakeButton.onclick = function reloadQuiz() {
  currentNum = 0;
  totalScore = 0;
  questionText.innerHTML = allQuestions[0].question;
  document.getElementById("choice1").innerHTML = allQuestions[0].answers[0]; 
  document.getElementById("choice2").innerHTML = allQuestions[0].answers[1];
  document.getElementById("choice3").innerHTML = allQuestions[0].answers[2];
  document.getElementById("questionForm").classList.remove("u-quiz-hide");
  navButton.classList.remove("u-quiz-hide");
};