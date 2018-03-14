console.log("sing.js loaded");
/*Write code that console logs the "Bottles of beer on the wall" song:

 5 bottles of beer on the wall,
 5 bottles of beer!
 Take one down and pass it around,
 4 bottles of beer on the wall!

Bonus: fix "1 bottles of beer". It should say "1 bottle of beer".

Bonus: change "0 bottles..." to "No more bottles...".

Bonus: Use a JavaScript prompt to ask the user how many verses they want to hear.*/

let totalBottles = 5;

for (totalBottles; totalBottles >0; totalBottles--){
	if(totalBottles > 2 ){
	console.log(`${totalBottles} bottles of beer on the wall, ${totalBottles} bottles of beer!`);
	console.log('Take one down and pass it around,');
	console.log(`${totalBottles-1} bottles of beer on the wall!`);

	}else if (totalBottles > 1){
		console.log(`${totalBottles} bottles of beer on the wall, ${totalBottles} bottles of beer!`);
		console.log('Take it down and pass it around,');
		console.log(`${totalBottles-1} bottle of beer on the wall!`);

	}else if (totalBottles === 1){
		console.log(`${totalBottles} bottle of beer on the wall, ${totalBottles} bottle of beer!`);
		console.log('Take it down and pass it around,');
		console.log('No more bottles of beer on the wall...');
	}
}
