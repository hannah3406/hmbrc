// toggle
const elBurgur = document.querySelector('.menu-trigger');
const elBg = document.querySelector('.menu_bg');
const elBox = document.querySelector('.menu_box');
const elBackgroundMenu = document.querySelector('.background-menu');
console.log(elBackgroundMenu);
	elBurgur.addEventListener('click',function(){
		this.classList.toggle('active-7');
		elBg.classList.toggle('active');
		elBox.classList.toggle('active1');
		elBackgroundMenu.classList.toggle('active2');
});

