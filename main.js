// First Section
let backgroundImages=[
    './images/img1.png',
    './images/img2.png',
    './images/img3.png',
    './images/img4.png'
]
let index=0;
setInterval(function(){
    if(index===3){
        index=-1;
    }
    index++;
    document.querySelector('.section1').style.backgroundImage=`url('${backgroundImages[index]}')`
},5000)