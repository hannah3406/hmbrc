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

//json 파일 연결하기
fetch('js/data.json')
    .then((res) =>  res.json())
    .then((data) => callback(data));

    function callback(data){
        //대상생물 Ul,popup 선택자 잡아주기
        const elUl = document.querySelector('.sub3_41 ul');
        let msg = '';
        
        //li 추가하기
        data.conservation.forEach(function(v,k){
            src = data.conservation[k].src
            name = data.conservation[k].name
            detail = data.conservation[k].detail

            msg += ` <li class="btnPopup">
                        <a>${name}</a>
                        <p>${name}</p>
                    </li>`;            
        });
        elUl.innerHTML = msg;
        //팝업창 열리게
        const popUpAll = document.querySelector('.popUpAll')
        const btnPopup = document.querySelectorAll('.btnPopup')
        for(let i=0;i<7;i++){
            //pop-2
            //열기
                btnPopup[i].addEventListener('click',function(){
                popUpAll.classList.add('open');
                 //popup창 안 내용 추가
                    src = data.conservation[i].src
                    name = data.conservation[i].name
                    detail = data.conservation[i].detail

                    msg = `<div class="pop-close">
                                <article class="pop-21">
                                    <h2>${name}</h2>
                                    <div>
                                        <figure><img src="${src}" alt="고래"></figure>
                                        <p>${detail}</p>
                                    </div>
                                </article>
                                <a>닫기</a>
                            </div>`
                    popUpAll.innerHTML = msg;
            })

            
            //닫기
            popUpAll.addEventListener('click',function(){
                if(event.target.nodeName =='A'){
                    this.classList.remove('open');}
            })
    }
    //화살표 누르면 이미지가 옆으로 이동하게 만들기
    const elBtnGo = document.querySelectorAll('.ar3-1 a');
    const elImage = document.querySelector('.sub3_41 ul li');
    let s = 0;

    for(let i=0;i<elBtnGo.length;i++){
        elBtnGo[i].addEventListener('click',function(){
            if(i==1){
                if(s>-4){s--;}
            }else{
                if(s<0){s++;}
            }
            let x1 = (elImage.offsetWidth + 20) * s;
            elUl.style = `transform:translateX(${x1}px)`;
            });
        };
    }




//matchMedia
