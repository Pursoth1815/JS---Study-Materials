
function LetterCapitalize(str) { 

	// code goes here  
	let splitWord = str.split(" ");
	let final = [...splitWord]

	for(var i=0; i<final.length; i++) {
		final[i] = final[i].charAt(0).toUpperCase() + final[i].slice(1);
	}

	const str2 = final.join(" ");
	console.log(str2);
	
  
  }
	 
  // keep this function call here 
  console.log(LetterCapitalize('i read boooks'));