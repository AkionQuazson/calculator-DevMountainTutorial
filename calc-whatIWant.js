const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const operators = {
	'+': (a, b)=>{return (a + b)},
	'-': (a, b)=>{return (a - b)},
	'*': (a, b)=>{return (a * b)},
	'/': (a, b)=>{return (a / b)},
	'sqrt': (a, b)=>{return Math.sqrt(a)},
	'%': (a, b)=>{return (a % b)}
}

reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	console.log('Your result is ', operators[mathSymbol](num1, num2));
	// This line closes the connection to the command line interface.
	reader.close()

});
