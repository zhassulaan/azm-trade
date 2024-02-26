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
