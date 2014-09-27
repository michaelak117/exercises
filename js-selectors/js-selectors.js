	    // 2.1 

	    var slap = function() {
	  alert('SLAP');
	};
	slap();

	//2.2

//2.3
var doubleIt = function (x) {
	var result = x * 2;
  alert(x + ' times two is ' + result);
};
doubleIt(22);

	//2.4//

	var greet = function (name) {
	  alert("Welcome, " + name);
	};
	greet('Bob');

	//3.2//

	var yell = function (string) {
		alert(string.toUpperCase());
	};

		yell('Whats up Witcha');


	//3.2
var divideBy = function (x,y) {
	var result = x / y;
	return result;

}
	var result = divideBy(50, 2);
	console.log('Result should be 25:', result);

	result = divideBy(40, 10);
	console.log('Result should be 4:', result);

	result = divideBy(99, 3);
	console.log('Result should be 33:', result);

	//more exercises 0: angry gandalf

	var angryGandalf = function(color) {
		if (color === 'grey') {
		return "YOU...SHALL NOT... PASS!";

		} else if (color === 'white') {
		return "You merely passed me to your demise.";

		} else {
			return "I don't think I'm Gandalf anymore.";
			}
	}
	}

	}

	console.assert(angryGandalf('grey') === "YOU...SHALL NOT... PASS!");
	console.assert(angryGandalf('white') === "You merely passed me to your demise.");
	console.assert(angryGandalf(2) === "I don't think I'm Gandalf anymore.");
