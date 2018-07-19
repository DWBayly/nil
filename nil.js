let nil = "";
const readline = require('readline');
console.log("Welcome to nil interpreter");
console.log("It takes any correct nil syntax, compiles it and then disregards it. ");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function interpret(nil){
	rl.question("nil?:\n",(answer)=>{
		console.log("nil:"+nil);
		interpret(nil);
	});
}
interpret(nil);
