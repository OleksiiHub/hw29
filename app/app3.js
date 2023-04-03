const calculator = function(init = 1) {
	return function () {
  	return init++;
  }
}

const c = calculator();
console.log(c()); // має вивести 1
console.log(c()); // має вивести 2

