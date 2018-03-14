console.log("security_questions.js loaded");

let securityQuestions = [ 
	{question: 'What is your spirit animal?',
	expectedAnswer: 'Wolf'},
	{question: 'What was your first car?',
	expectedAnswer: 'Mustang'},
	{question: 'What is the name of your mom?',
	expectedAnswer: 'Diane'}
	]

for (let i = 0; i < securityQuestions.length; i++){
	let securityQ = window.prompt(securityQuestions[i].question);
	console.log(securityQ);
	if (securityQ !== securityQuestions[i].expectedAnswer){
		alert("Incorrect Answer!");
		break;
	} 
}