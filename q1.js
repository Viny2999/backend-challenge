const retornaComponentesDeSoma = (nums, alvo) => {
	let res = [];
	
	nums.forEach((num, index) => {
		if (nums[index] + nums[index + 1] == alvo) { 
			res.push(index);
			res.push(index + 1);
		}
	});

	return res;
}

console.log(retornaComponentesDeSoma([2, 7, 11, 15], 9));