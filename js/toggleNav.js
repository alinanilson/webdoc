document.addEventListener("DOMContentLoaded", function(event) { 
	var navLinks = document.querySelector('.navNarrow');
	var narrowLinks = document.querySelector('.narrowLinks');

	navLinks.addEventListener('click', toggle);

	function toggle() {
		narrowLinks.classList.toggle('hidden');
	};
});