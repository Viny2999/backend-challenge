const lucroMaxAcoes = (diasValores) => {
	let valorCompra = 0;
	let valorVenda = 0;
	let dataCompra = 0;
	let dataVenda = 0;

	for (let i = 0; i < diasValores.length; i++) {
		if (diasValores[i] == Math.min(...diasValores)) {
			dataCompra = i + 1;
			valorCompra = diasValores[i];
			i = dataCompra;
		} else if (i + 1 < diasValores.length) {
			if (diasValores[i] > diasValores[i + 1]) {
				if (valorCompra > 0) {
					valorVenda = diasValores[i];
					dataVenda = i + 1;
				}
			}
		}
	}

	if (valorVenda - valorCompra > 0) {
		return valorVenda - valorCompra;
	} else {
		return 0;
	}
	
}

console.log(lucroMaxAcoes([7,1,5,3,6,4]));
console.log(lucroMaxAcoes([7,6,4,3,1]));