let userName = "NODDA";

userName
	? console.log(`Welcome back, ${userName}`)
	: console.log("Hello stranger");

let userQuestion = "";
console.log(userQuestion);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

if (randomNumber === 0) {
	console.log("It is certain");
} else if (randomNumber === 1) {
	console.log("It is decidedly so");
} else if (randomNumber === 2) {
	console.log("Reply hazy try again");
} else if (randomNumber === 3) {
	console.log("Cannot predict now");
} else if (randomNumber === 4) {
	console.log("Do not count on it");
} else if (randomNumber === 5) {
	console.log("My sources say no");
} else if (randomNumber === 6) {
	console.log("Outlook not so good");
} else if (randomNumber === 7) {
	console.log("Signs point to yes");
} else {
	console.log("Error");
}

console.log(eightBall);
