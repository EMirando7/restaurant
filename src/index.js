import { populateContact } from "../contactTab";
import { populateMenu } from "../menuTab";
function skeleton() {
	const paragraph = document.createElement('p');
	const header1 = document.createElement('header');
	const h1 = document.createElement('h1');
	const myImage = document.createElement('img');
	const contentDiv = document.getElementById('content');
	const navigationParent = document.createElement('ul');
	for (let i = 0; i < 2; i++) {
		const singleNav = document.createElement('li');
		navigationParent.append(singleNav);
		if (i == 0) {
			singleNav.textContent = 'Contact'
			singleNav.id = 'nav1'
		}
		if (i == 1) {
			singleNav.textContent = 'Menu';
			singleNav.id = 'nav2'
		}
	}
	contentDiv.insertAdjacentElement('afterbegin', myImage);
	contentDiv.insertBefore(header1, myImage);
	header1.append(h1);
	h1.textContent = "Rigoletto";
	contentDiv.append(paragraph);
	contentDiv.insertBefore(navigationParent, myImage);
	myImage.src = '/Users/emilianomiranda/dev/odinproject/restaurant/cakke.jpg';
	paragraph.textContent = "Get your cakes and buns here. Yes, the cream-cheesy name says we're exotic, or at least try to be. Test it out, call us out if not. Or worse yet, leave a bad review on Yelp.";
}
skeleton()
populateContact();
populateMenu()
// clicking on tabs
let contactDroppings = document.getElementById('droppings1');
let menuDroppings = document.getElementById('droppings2')
let contactTab = document.getElementById('nav1');
let menuTab = document.getElementById('nav2');
let body = document.querySelector('body')
//////

contactTab.addEventListener('click', () => {
	menuDroppings.style.display = 'none'
	contactDroppings.style.display = 'block';

})
menuTab.addEventListener('click', () => {
	contactDroppings.style.display = 'none'
	menuDroppings.style.display = 'block'
})