const parentheseOpen = '(';
const parentheseClose = ')';
const bracketOpen = '[';
const bracketClose = ']';
const braceOpen = '{';
const braceClose = '}';

const checkIsBalanced = (oneString) => {
	let littleStack = [];

	for (let i = 0; i < oneString.length; i++) { 
		switch(oneString.charAt(i)) {
			case parentheseOpen:
				littleStack.push(parentheseOpen);
				break;
			case bracketOpen: 
				littleStack.push(bracketOpen);
				break;
			case braceOpen:
				littleStack.push(braceOpen);
				break;
			case parentheseClose:
				if (littleStack == []) {
					return 'NAO';
				}
				if (littleStack.pop() != parentheseOpen) {
					return 'NAO';
				}
				break;
			case bracketClose:
				if (littleStack == []) {
					return 'NAO';
				}
				if (littleStack.pop() != bracketOpen) {
					return 'NAO';
				}
				break;
			case braceClose:
				if (littleStack == []) {
					return 'NAO';
				}
				if (littleStack.pop() != braceOpen) {
					return 'NAO';
				}
				break;
		}
	}
	return 'SIM';
}

console.log(checkIsBalanced('{[()]}'));
console.log(checkIsBalanced('{[(])}'));
console.log(checkIsBalanced('{{[[(())]]}}'));