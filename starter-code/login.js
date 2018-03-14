console.log("login.js loaded");
/*Create a userLogin object with one key for a user's name and one key for the user's password. 
(Just make up a user name and password.)

Write code that prompts the user for their password with a message customized to the user. 
For example, if the user name you created is octocat_rules, the message should be "Enter password for user octocat_rules."

Extend your previous code to check whether the password entered by the user actually matches the password in the userLogin
 object. The code should let the user know whether the passwords matched with console logs or a JavaScript alert.

If the passwords don't match, prompt the user to enter their password again. 
If the passwords match, make sure your code doesn't prompt the user again.

Bonus: Modify your user login to give the user only three chances to enter the correct password.*/

let userLogin = {userName:'FunnyJoe1', password:'123'}

	let logIn = window.prompt(`Enter password for user ${userLogin['userName']}`);
	console.log(logIn);
	
	while (logIn !== userLogin.password){
		alert("Incorrect Password");
		logIn = window.prompt(`Enter password for user ${userLogin['userName']}`);
	}

