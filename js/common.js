// toggle
const elBurgur = document.querySelector('.menu-trigger');
const elBg = document.querySelector('.menu_bg');
	elBurgur.addEventListener('click',function(){
		this.classList.toggle('active-7');
		elBg.classList.toggle('active');
      });
