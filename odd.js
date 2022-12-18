function isOdd(num) {
  let x = "";
  if (num % 2 === 0) {
	 x = "false";
  }

  else {
	 x = "true";
  }
  return x;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
