// Variables
const d = document;
const $q = d.querySelectorAll.bind(d);
const $g = d.querySelector.bind(d);

// d.addEventListener("DOMContentLoaded", function() {
// 	const textElement = $g('header-bottom__menu .text');
// 	textElement.addEventListener('mouseenter', function() {
// 		const dropdownElement = $g('.header-dropdown');
// 		dropdownElement.style.display = 'block';
// 	});

// 	textElement.addEventListener('mouseleave', function() {
// 		const dropdownElement = $g('.header-dropdown');
// 		dropdownElement.style.display = 'none';
// 	});
// });

// Like
function handleLike(id) {
	let card = $g(`#${id} .card-like`);
	if (card.classList.contains('active'))
		card.classList.remove('active');
	else
		card.classList.add('active');
}

function dragSlider(id) {
	const container = $g(`#${id}`);
	let isDown = false;
	let startX;
	let scrollLeft;

	container.addEventListener('mousedown', (e) => {
		isDown = true;
		container.classList.add('active');
		startX = e.pageX - container.offsetLeft;
		scrollLeft = container.scrollLeft;
	});
	container.addEventListener('mouseleave', () => {
		isDown = false;
		container.classList.remove('active');
	});
	container.addEventListener('mouseup', () => {
		isDown = false;
		container.classList.remove('active');
	});
	container.addEventListener('mousemove', (e) => {
		if (!isDown)
			return;
		e.preventDefault();
		const x = e.pageX - container.offsetLeft;
		const walk = (x - startX) * 3;
		container.scrollLeft = scrollLeft - walk;
	});
}

// Modal
function handleModal(id) {
	let modal = $g(`#${id}`);
	if (modal.classList.length > 1) {
		modal.classList.remove('show');
		d.body.style.overflow = 'auto';
	} else {
		modal.classList.add('show');
		d.body.style.overflow = 'hidden';
	}
}
