 //sns디자인
 const snsslide = new Swiper('.sns', {
    autoplay:{delay:0,},
    loop:true,
    speed:7000,
    slidesPerView:4,
})

//배너디자인
const bnrlslide = new Swiper('.banner', {
    autoplay:{delay:0,},
    loop:true,
    speed:5000,
    slidesPerView:3,
    spaceBetween:20,
})

//상세디자인
const detailslide = new Swiper('.detail',{
    slidesPerView:2,
    spaceBetween:20,
})

//출력 및 숨기기
const popup_bg = document.querySelector('.popup_bg')
const sns = document.querySelectorAll('.sns img')
const bnr = document.querySelectorAll('.banner img')
const detail = document.querySelectorAll('.detail img')

popup_bg.style.display = 'none'
for(let i of sns){
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block'
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '700px';
        popup_bg.children[0].style.marginTop = '100px'
        // console.log(i.src)
        // console.log(popup_bg.children[0].children[0])
    })
}
for(let i of bnr){
    i.addEventListener('click',()=>{
        popup_bg.children[0].scrollTo(0,0);
        popup_bg.style.display = 'block'
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '900px';
        popup_bg.children[0].style.marginTop = '300px'
        // console.log(i.src)
        // console.log(popup_bg.children[0].children[0])
    })
}
for(let i of detail){
    i.addEventListener('click',()=>{
        popup_bg.children[0].scrollTo(0,0);
        popup_bg.style.display = 'block'
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '700px';
        popup_bg.children[0].style.marginTop = '100px'
        // console.log(i.src)
        // console.log(popup_bg.children[0].children[0])
    })
}
popup_bg.addEventListener('click',function(){
    popup_bg.style.display = 'none'
})