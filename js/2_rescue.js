//pop-1 관련법안 상세보기
   //열기
btnPopup1.addEventListener('click',function(){
    elPopup1.classList.add('open1');
})

   //닫기
elPopup1.addEventListener('click',function(){
    if(event.target.nodeName =='A'){
        elPopup1.classList.remove('open1');}
})

//pop-2
   //열기
    btnPopup2.addEventListener('click',function(){
    elPopup2.classList.add('open2');
})

   //닫기
elPopup2.addEventListener('click',function(){
    if(event.target.nodeName =='A'){
        elPopup2.classList.remove('open2');}
})

//pop-3
   //열기
   btnPopup3.addEventListener('click',function(){
    elPopup3.classList.add('open3');
})

   //닫기
elPopup3.addEventListener('click',function(){
    if(event.target.nodeName =='A'){
        elPopup3.classList.remove('open3');}
})

//pop-4
   //열기
   btnPopup4.addEventListener('click',function(){
    elPopup4.classList.add('open4');
})

   //닫기
elPopup4.addEventListener('click',function(){
    if(event.target.nodeName =='A'){
        elPopup4.classList.remove('open4');}
})


//scroll event

//스크롤 내리면 글 올라오며 등장
window.addEventListener('scroll',function(){
    const elM = document.querySelectorAll('.elM');
    
    for(let i=0;i<elM.length;i++){
            let elHei = elM[i].offsetTop;
            let winHei = window.innerHeight;
            
        if(elHei-winHei <= window.scrollY){
            elM[i].classList.add('active');
        }
    }
})