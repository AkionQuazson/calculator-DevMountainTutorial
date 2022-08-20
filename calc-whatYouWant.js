const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	let result;
	if (mathSymbol === "+") {
		result = num1 + num2;
	}
	else if (mathSymbol === "-") {
		result = num1 - num2;
	}
	else if (mathSymbol === "*") {
		result = num1 * num2;
	}
	else if (mathSymbol === "/") {
		result = num1 / num2;
	}
	else if (mathSymbol === "sqrt") {
		result = num1**(1/num2);
	}
	else if (mathSymbol === "%") {
		result = num1 % num2;
	}

	console.log('Your result is ', result);
	// This line closes the connection to the command line interface.
	reader.close()

});
