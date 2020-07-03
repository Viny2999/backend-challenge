const getRetencao = (mapaElevacao) => {
	let retencao = 0;
	let esq = 0;
	let dir = mapaElevacao.length - 1;
	let maxEsq = 0;
	let maxDir = 0;

	while (esq < dir) {
		if (mapaElevacao[esq] < mapaElevacao[dir]) {
			mapaElevacao[esq] >= maxEsq ? (maxEsq = mapaElevacao[esq]) : retencao += (maxEsq - mapaElevacao[esq]);
			++esq;
		} else {
			mapaElevacao[dir] >= maxDir ? (maxDir = mapaElevacao[dir]) : retencao += (maxDir - mapaElevacao[dir]);
			--dir;
		}
	}
	return retencao;
}

console.log(getRetencao([0,1,0,2,1,0,1,3,2,1,2,1]));