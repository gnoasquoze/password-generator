function passwordGenerator(n) {
	let password = "";
	for (let i = 0; i < n; i++) {
		password += String.fromCharCode(~~(94*Math.random()+33));
	}
	return password;
}