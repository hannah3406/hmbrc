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


//화살표 누르면 이미지가 옆으로 이동하게 만들기
const elBtnGo = document.querySelectorAll('.ar3-1 a');
const elUl = document.querySelector('.sub3_41 ul');
const elImage = document.querySelector('.sub3_41 ul li');
let s = 0;

for(let i=0;i<elBtnGo.length;i++){
elBtnGo[i].addEventListener('click',function(){
    if(i==1){
        if(s>-5){s--;}
    }else{
        if(s<0){s++;}
    }
    let x1 = (elImage.offsetWidth + 20) * s;
    elUl.style = `transform:translateX(${x1}px)`;
});
};
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

//pop-5
   //열기
   btnPopup5.addEventListener('click',function(){
    elPopup5.classList.add('open5');
})

   //닫기
elPopup5.addEventListener('click',function(){
    if(event.target.nodeName =='A'){
        elPopup5.classList.remove('open5');}
})

//pop-6
   //열기
   btnPopup6.addEventListener('click',function(){
    elPopup6.classList.add('open6');
})

   //닫기
elPopup6.addEventListener('click',function(){
    if(event.target.nodeName =='A'){
        elPopup6.classList.remove('open6');}
})

//pop-7
   //열기
   btnPopup7.addEventListener('click',function(){
    elPopup7.classList.add('open7');
})

   //닫기
elPopup7.addEventListener('click',function(){
    if(event.target.nodeName =='A'){
        elPopup7.classList.remove('open7');}
})

//pop-8
   //열기
   btnPopup8.addEventListener('click',function(){
    elPopup8.classList.add('open8');
})

   //닫기
elPopup8.addEventListener('click',function(){
    if(event.target.nodeName =='A'){
        elPopup8.classList.remove('open8');}
})
