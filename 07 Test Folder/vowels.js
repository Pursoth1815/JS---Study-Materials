function loopFunc(value) {
	let letter = value.toLowerCase();
	for (let i of letter) {
		if( i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
			
			console.log(i);
		}
		else {
			continue
		}
	}
	for (let i of letter) {
		if( i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
			
			continue
		}
		else {
			console.log(i);
		}
	}
}

loopFunc('javascript');