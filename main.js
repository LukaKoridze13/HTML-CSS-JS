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
    if(window.scrollY>245){
        firstPr1.classList.add('pinkdiv11')
        firstPr2.classList.add('pinkdiv22')
        firstPr3.classList.add('pinkdiv33')
        firstPr4.classList.add('pinkdiv44')
    }
})


// Third Section


// Fourth Section
let imagesBox=[
    "./imagesBox/IMG1.png",
    "./imagesBox/IMG2.png",
    "./imagesBox/IMG3.png",
    "./imagesBox/IMG8.png",
    "./imagesBox/IMG4.png",
    "./imagesBox/IMG5.png",
    "./imagesBox/IMG6.png",
    "./imagesBox/IMG7.png"

]
let textBox=[
    'Graphics Design',
    'Best Service',
    'Responsive Design',
    'Pixel Perfect',
    'Unique Ideas',
    'Design Analysis',
    'Fully Managed',
    'Helpful Support'
]
for(let i=0;i<8;i++){
    let box=document.createElement('div')
    document.querySelector('.box').appendChild(box)
    box.style.border='2px #707070 solid'
    box.style.width='285px'
    box.style.height='360px'
    box.style.backgroundColor='#FAFAFA'
    box.style.display='flex'
    box.style.flexDirection='column'
    box.style.justifyContent='center'
    box.style.alignItems='center'
    let childImage=document.createElement('img')
    box.appendChild(childImage)
    childImage.setAttribute('src',`${imagesBox[i]}`)
    let childText=document.createElement('p')
    childText.innerHTML=textBox[i]
    box.appendChild(childText)
    childText.style.color='#15263E'
    childText.style.fontWeight='bold'
    childText.style.marginTop='20px'
    let header=document.createElement('p')
    let lorem=document.createElement('p')
    let diver=document.createElement('div')
    diver.style.display='flex'
    diver.style.flexDirection='column'
    diver.style.justifyContent='center'
    diver.style.alignItems='center'
    header.innerHTML=textBox[i]
    header.style.color='white'
    header.style.fontSize='1.5vw'
    diver.appendChild(header)
    lorem.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora quod cupiditate consequatur, dolores repellendus repudiandae sit quas facere aliquid voluptatum deserunt dolorem architecto impedit nihil ipsum atque autem accusamus!'
    lorem.style.color='white'
    lorem.style.fontSize='0.9vw'
    lorem.style.marginTop='20px'
    lorem.style.width='80%'
    diver.appendChild(lorem)
    diver.style.width='80%'
    box.appendChild(diver)
    diver.style.display='none'
    diver.style.width='100%'
    box.addEventListener('mouseover',function(){
        childImage.style.display='none'
        childText.style.display='none'
        diver.style.display='flex'
        box.style.backgroundColor='#15263E'

    })
    box.addEventListener('mouseout',function(){
        childImage.style.display='block'
        childText.style.display='block'
        diver.style.display='none'
        box.style.backgroundColor='#FAFAFA'
    })

}

// Fifth Section
let but1=document.querySelector('.but1')
let but2=document.querySelector('.but2')
let but3=document.querySelector('.but3')
but1.addEventListener('click',function(){
    document.querySelector('.sec5div1').style.display='flex'
    document.querySelector('.sec5div2').style.display='none'
    document.querySelector('.sec5div3').style.display='none'
    but1.classList.add('pink')
    but3.classList.remove('pink')
    but2.classList.remove('pink')
})

but2.addEventListener('click',function(){
    document.querySelector('.sec5div2').style.display='flex'
    document.querySelector('.sec5div1').style.display='none'
    document.querySelector('.sec5div3').style.display='none'
    but1.classList.remove('pink')
    but3.classList.remove('pink')
    but2.classList.add('pink')
})

but3.addEventListener('click',function(){
    document.querySelector('.sec5div3').style.display='flex'
    document.querySelector('.sec5div1').style.display='none'
    document.querySelector('.sec5div2').style.display='none'
    but1.classList.remove('pink')
    but2.classList.remove('pink')
    but3.classList.add('pink')
})

// Sixth Section
let backImgs=[
    './images/po1.png',
    './images/po2.png',
    './images/po3.png',
    './images/po4.png',
    './images/po5.png',
    './images/template.png'
]
for(let i=0;i<6;i++){
    let div=document.querySelector(`.epic${i+1}`)
    div.style.backgroundImage=`url('${backImgs[i]}')`
    
}


for(let i=1;i<7;i++){
    let clickable=document.querySelector(`.num${i+1}`)
    let epic1=document.querySelector(`.epic${i}`)
    let epic2=document.querySelector(`.epic${i}${i}`)
    let po=document.querySelector(`.t${i}`)
    po.addEventListener('mouseover',function(){
        document.querySelector(`.epic${i}`).style.display='none'
        document.querySelector(`.epic${i}${i}`).style.display='flex'
        for(let o=1;o<7;o++){
            document.querySelector(`.num${o}`).classList.remove('pink1')
        }
        for(let p=1;p<7;p++){
            if(p==i){
                
            }else{
                document.querySelector(`.epic${p}`).style.display='block'
                document.querySelector(`.epic${p}${p}`).style.display='none'

            }
        }
    })
    po.addEventListener('mouseout',function(){
        document.querySelector(`.epic${i}`).style.display='block'
        document.querySelector(`.epic${i}${i}`).style.display='none'
        for(let o=1;o<7;o++){
            document.querySelector(`.num${o}`).classList.remove('pink1')
        }
        for(let p=1;p<7;p++){
            if(p==i){
                
            }else{
                document.querySelector(`.epic${p}`).style.display='block'
                document.querySelector(`.epic${p}${p}`).style.display='none'

            }
        }
    })
    clickable.addEventListener('click',function(){
        for(let k=1;k<8;k++){
            document.querySelector(`.num${k}`).classList.remove('pink1')
        }
        clickable.classList.toggle('pink1')
        epic1.style.display='none'
        epic2.style.display='flex'
        for(let p=1;p<7;p++){
            if(p==i){
                
            }else{
                document.querySelector(`.epic${p}`).style.display='block'
                document.querySelector(`.epic${p}${p}`).style.display='none'

            }
        }
    })

}
let zuzu=document.querySelector('.num1')
zuzu.addEventListener('click',function(){
    for(let k=1;k<8;k++){
        document.querySelector(`.num${k}`).classList.remove('pink1')
    }
    document.querySelector(`.num1`).classList.toggle('pink1')
    for(let p=1;p<7;p++){
        document.querySelector(`.epic${p}`).style.display='block'
        document.querySelector(`.epic${p}${p}`).style.display='none'

    }
})



