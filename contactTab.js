export function populateContact() {
	const contactDroppings = document.createElement('div');
	const theTab = document.getElementById('nav1');
	contactDroppings.style.display = 'none';
	contactDroppings.style.backgroundColor = 'white';
	contactDroppings.style.zIndex = 1;
	contactDroppings.textContent = 'Hello Mr.';
	contactDroppings.style.position = 'absolute';
	contactDroppings.style.top = '6.0em';
	contactDroppings.style.width = '300px';
	contactDroppings.style.height = '300px';
	contactDroppings.style.color = 'black'
	contactDroppings.id = 'droppings1'
	theTab.insertAdjacentElement('beforeend', contactDroppings);

}