export function populateMenu() {
	const menuDroppings = document.createElement('div');
	const theTab = document.getElementById('nav2');
	menuDroppings.style.display = 'none';
	menuDroppings.style.backgroundColor = 'white';
	menuDroppings.style.zIndex = 1;
	menuDroppings.textContent = 'WORLDWIDE';
	menuDroppings.style.position = 'absolute';
	menuDroppings.style.top = '6em';
	menuDroppings.style.width = '300px';
	menuDroppings.style.height = '300px';
	menuDroppings.style.color = 'black'
	menuDroppings.id = 'droppings2'
	theTab.insertAdjacentElement('beforeend', menuDroppings);
}