// toggle
const elBurgur = document.querySelector('.menu-trigger');
const elBg = document.querySelector('.menu_bg');
const elBox = document.querySelector('.menu_box');
const elBackgroundMenu = document.querySelector('.background-menu');

	elBurgur.addEventListener('click',function(){
		this.classList.toggle('active-7');
		elBg.classList.toggle('active');
		elBox.classList.toggle('active1');
		elBackgroundMenu.classList.toggle('active2');
});

//top버튼
const elTop = document.querySelector('.top');

window.addEventListener('scroll',function(){

	if(window.innerHeight < window.scrollY){
		elTop.classList.add('active');
	}else{
		elTop.classList.remove('active');
	}
});

