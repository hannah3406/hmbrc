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
//화살표 누르면 이미지가 옆으로 이동하게 만들기
const elBtnGo = document.querySelector('.ar3-1 a');
const elUl = document.querySelector('.sub3_41 ul');
const elImage = document.querySelector('.sub3_41 ul li');
let s = 0;

for(let i=0;i<elBtnGo.length;i++){
elBtnGo.addEventListener('click',function(){
    if(i==1){
        s++;

    }else{
        s--;
    }
    console.log(m);
    let x1 = elImage.offsetWidth * s;
    elUl.style = `transform:translateX(${x1}px)`;
});
};