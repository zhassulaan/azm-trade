// Variables
const d = document;
const $q = d.querySelectorAll.bind(d);
const $g = d.querySelector.bind(d);

// Like
function handleLike(id) {
	let card = $g(`#${id} .card-like`);
	if (card.classList.contains('active'))
		card.classList.remove('active');
	else
		card.classList.add('active');
}
