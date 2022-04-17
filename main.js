// First Section
let backgroundImages=[
    './images/img1.png',
    './images/img2.png',
    './images/img3.png',
    './images/img4.png'
]
document.querySelector('.section1').style.backgroundImage=`url('./images/img1.png')`
let index=0;

let anim1=setInterval(changeBackground,5000)
if(screen.width<855){
    clearInterval(anim1)
    document.querySelector('.section1').style.backgroundImage=`none`
}
function changeBackground(){
    if(index===3){
        index=-1;
    }
    index++;
    document.querySelector('.section1').style.backgroundImage=`url('${backgroundImages[index]}')`
}


// Second Section
let firstPr1=document.querySelector('.pinkdiv1')
let firstPr2=document.querySelector('.pinkdiv2')
let firstPr3=document.querySelector('.pinkdiv3')
let firstPr4=document.querySelector('.pinkdiv4')
document.addEventListener('scroll',function(){
    console.log(window.scrollY)
    if(window.scrollY>245){
        firstPr1.classList.add('pinkdiv11')
        firstPr2.classList.add('pinkdiv22')
        firstPr3.classList.add('pinkdiv33')
        firstPr4.classList.add('pinkdiv44')
    }
})
