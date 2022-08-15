const navMenu=document.querySelector('#nav__menu'),
      navClose=document.querySelector('#nav__close'),
      navToggle=document.querySelector('#nav__toggle'),
      navLink=document.querySelectorAll('.nav__link');
      

navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show__menu')
})

navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show__menu')
})


let linkAction= ()=>navMenu.classList.remove('show__menu');

navLink.forEach(link=>link.addEventListener('click',linkAction));


const skillsContent=document.querySelectorAll('.skills__content')
const skillsHeader=document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className

    for( i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach(e=>{
    e.addEventListener('click', toggleSkills)
})


const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target=document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})



const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal_close')


let modal = (modalClick)=>{
    modalViews[modalClick].classList.add('active_modal')

}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click',()=>{
        modalViews.forEach(modalViews =>{
            modalViews.classList.remove('active_modal')
        })
    })
})





const sections = document.querySelectorAll('section[id]')


let scrollActive= ()=>{
    const scrollY=window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if(scrollY> sectionTop && scrollY<= sectionTop+ sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')

        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId+']').classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll',scrollActive)






const scrollHeader =()=>{
    const nav = document.getElementById('header')
    //when the scrool is greater than 200 ciewport height, add the scrool-header class to the header tag

    if(this.scrollY >= 80) nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)




const scrollUp =()=>{
    const scrollup = document.getElementById('scroll-up');
    //when the scroll is higher than 560 viewport height , add the show-scroll class to the a tag with the scroll

    if(this.scrollY >= 560) scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp)







let themeButton =document.getElementById('theme-button')
let darkTheme='dark-theme'
let iconTheme = 'uil-sun'


const selectedTheme = localStorage.getItem('secected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = ()=> document.body.classList.contains(darkTheme)? 'dark': 'light'

const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme)? 'uil-moon':'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon ==='uil-moon'?'add': 'remove'](iconTheme)
}


themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





window.addEventListener('scroll',()=>{
    // console.log(this.scrollY)
    if(this.scrollY>=400 && this.scrollY<=450){
        
        let i=0
        let n=0
        let z=0
        setInterval(function(){ 
            if(i<=8){
                document.querySelector(".count1").innerHTML=`${i}+`;
                i++;
            }
            if(n<=20){
                document.querySelector(".count2").innerHTML=`${n}+`;
                n++;
            }
            if(z<=5){
                document.querySelector(".count3").innerHTML=`${z}+`;
                z++;
            }
        }, 250);
    }
});

        




var typed = new Typed('.type', {
    // Waits 1000ms after typing "First"
    strings: ['Programer.', 'Designer.','Developer.','Frelancer.','Learner.'],
    typeSpeed:100,
    backSpeed:70,
    loop:true,
  });























// var cc =document.querySelector('.cc')
// var cursor = document.querySelector('#cursor')
// cc.addEventListener('mouseover',()=>{
//     cursor.classList.add('cursor')
// })

















    window.addEventListener('load',()=>{
    document.querySelector('#preloader').style.display='none';
    var loader=document.querySelectorAll('.preloader')
    loader.forEach(e=>{e.style.display='block'})
    })



