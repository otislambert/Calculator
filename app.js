// maps javascript items to html
const calcScreen = document.querySelector('#screen-text');

const numbtns = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
const clearBtn = document.querySelector('#clear');

let operation = 'place';

function placeNum(e) {
	let screenContent = calcScreen.textContent;
	let result = screenContent + e.target.id;
	calcScreen.textContent = result;
	console.log(result);
}

function addition(num) {
	let a = calcScreen.textContent;
	result = parseFloat(a) + num;
	calcScreen.textContent = result;
}

function subtraction(num) {
	let a = calcScreen.textContent;
	let result = parseFloat(a) - num;
	calcScreen.textContent = result;
}

function multiplication(num) {
	let a = calcScreen.textContent;
	let result = parseFloat(a) * num;
	calcScreen.textContent = result;
}

function division(num) {
	let a = calcScreen.textContent;
	let result = parseFloat(a) / num;
	calcScreen.textContent = result;
}

function clear() {
	calcScreen.textContent = '';
}

numbtns.forEach(btn => btn.addEventListener('click', placeNum));

operators.forEach(btn => btn.addEventListener('click', setOperation));

clearBtn.addEventListener('click', clear);

function setOperation(e) {
	operation = e.target.id;
}

function operate(e) {
	if (operation == 'place') {
		placeNum(e);
	}
	if (operation == 'add') {
		addition();
	}
}