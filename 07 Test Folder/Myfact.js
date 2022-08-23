function giveMeSomething(a) {
	j = a;
	for (i=a-1; i>=1; i--) {
		j *= i
	}
	return j;
}

let b = giveMeSomething(4);
console.log(b);