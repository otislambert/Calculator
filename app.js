// maps javascript items to html
const calcScreen = document.querySelector('#screen-text');

const numbtns = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equals');

// sets the stage for functions
let operation = 'place';
let a = '';
let operated = false;

numbtns.forEach(btn => btn.addEventListener('click', placeNum));

operators.forEach(btn => btn.addEventListener('click', setOperation));

clearBtn.addEventListener('click', clear);

equalBtn.addEventListener('click', operate);

function setOperation(e) {
	a = calcScreen.textContent;
	operation = e.target.id;
	calcScreen.textContent = e.target.id;
}

function operate() {
	console.log('operate')
	if (operation == 'add') {
		addition();
	}
	if (operation == 'subtract') {
		subtraction();
	}
	if (operation == 'multiply') {
		multiplication();
	}
	if (operation == 'divide') {
		division();
	}
	operated = true;
}

const operations = ['add', 'subtract', 'multiply', 'divide'];

function placeNum(e) {
	let result = '';
	let screenContent = calcScreen.textContent;
	if (operations.includes(calcScreen.textContent) || operated) {
		result = e.target.id;
	}
	else {
		if(e.target.id == '.' && calcScreen.textContent.includes('.')) {
			result = calcScreen.textContent;
		}
		else {
			result = screenContent + e.target.id;
		}
	}
	calcScreen.textContent = result;
	console.log(result);
	operated = false;
}

// calculator operations
function addition() {
	result = parseFloat(a) + parseFloat(calcScreen.textContent);
	calcScreen.textContent = result;
}

function subtraction() {
	let result = parseFloat(a) - parseFloat(calcScreen.textContent);
	calcScreen.textContent = result;
}

function multiplication() {
	let result = parseFloat(a) * parseFloat(calcScreen.textContent);
	calcScreen.textContent = result;
}

function division() {
	let result = parseFloat(a) / parseFloat(calcScreen.textContent);
	calcScreen.textContent = result;
}

function clear() {
	calcScreen.textContent = '';
}
