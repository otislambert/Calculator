// maps javascript items to html
const calcScreen = document.querySelector('#screen-text');

const numbtns = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equals');

// sets the stage for functions
let operation = '';

let operated = false;
let opString = false;

let a = '';
let b = '';

numbtns.forEach(btn => btn.addEventListener('click', placeNum));

operators.forEach(btn => btn.addEventListener('click', setOperation));

clearBtn.addEventListener('click', clear);

equalBtn.addEventListener('click', operate);

function setOperation(e) {
	if(opString) {
		b = calcScreen.textContent;
		operate();
		operation = e.target.id;
	}
	else {
		opString = true;
		a = calcScreen.textContent;
		calcScreen.textContent = e.target.id;
		operation = e.target.id;
	}
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
	result = '';
	let screenContent = calcScreen.textContent;
	if (operations.includes(calcScreen.textContent) || operated) {
		result = e.target.id;
		b = result;
	}
	else {
		if(e.target.id == '.' && calcScreen.textContent.includes('.')) {
			result = calcScreen.textContent;
		}
		else {
			result = screenContent + e.target.id;
			b = result;
		}
	}
	calcScreen.textContent = result;
	console.log(result);
	operated = false;
}

// calculator operations
function addition() {
	result = parseFloat(a) + parseFloat(b);
	calcScreen.textContent = result;
	a = result;
}

function subtraction() {
	let result = parseFloat(a) - parseFloat(b);
	calcScreen.textContent = result;
	a = result;
}

function multiplication() {
	let result = parseFloat(a) * parseFloat(b);
	calcScreen.textContent = result;
	a = result;
}

function division() {
	let result = parseFloat(a) / parseFloat(b);
	calcScreen.textContent = result;
	a = result;
}

function clear() {
	calcScreen.textContent = '';
	operated = false;
	opString = false;
	a = '';
	b = '';
}
