const lucroMaxAcoes = (diasValores) => {
	let lucroMax = 0;
	let menorPreco  = diasValores[0];
	for(let i = 1; i < diasValores.length; i++) {
		menorPreco = Math.min(diasValores[i], menorPreco);
		lucroMax = Math.max(lucroMax, diasValores[i] - menorPreco);
	}
	return lucroMax;
}

console.log(lucroMaxAcoes([7,1,5,3,6,4]));
console.log(lucroMaxAcoes([7,6,4,3,1]));