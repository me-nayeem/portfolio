const navLinks = document.querySelectorAll("header nav a");
const LogoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu_bar");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () =>{
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
});

const activePage = () => {
    const header = document.querySelector("header");
    const barsBox = document.querySelector(".bars-box");

    header.classList.remove("active");
    setTimeout(() => {
        header.classList.add("active");
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove("active");
    });


    barsBox.classList.remove("active");
    setTimeout(() => {
        barsBox.classList.add("active");
    }, 1100);
   
    sections.forEach(section => {
        section.classList.remove("active");
    });    

    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
}

navLinks.forEach((link, idx) => {
     link.addEventListener("click", ()=> {
        if(!link.classList.contains("active")) {
            activePage();

            link.classList.add("active");

            setTimeout(() =>{
                sections[idx].classList.add("active");
            },1100);
        }
     });
}); 


LogoLink.addEventListener("click", () =>{
    if(!navLinks[0].classList.contains("active")){
        activePage();

        navLinks[0].classList.add("active");

        setTimeout(() =>{
                sections[0].classList.add("active");
            },1100);
    }
})

const resumeBtn = document.querySelectorAll(".res_btn");

resumeBtn.forEach((btn, idx) =>{
    btn.addEventListener("click", ()=>{
        const resumedetails = document.querySelectorAll('.resume_detail');

        resumeBtn.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumedetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumedetails[idx].classList.add('active');

    });
});


const arrowRight = document.querySelector(".protfolio_box .navigation .arrow_right");
const arrowLeft = document.querySelector(".protfolio_box .navigation .arrow_left");
 
let idx = 0;

const activePortfolio = () =>{
    const imgSlide = document.querySelector(".protfolio_img .img_slide");
    const protfolioDetails = document.querySelectorAll(".protfolio_detail");

    imgSlide.style.transform =`translateX(calc(${idx * -100}% - ${idx * 2}rem))`


    protfolioDetails.forEach(detail => {
        detail.classList.remove("active");
    });

    protfolioDetails[idx].classList.add("active");
}

arrowRight.addEventListener("click", () =>{
    if(idx < 4) {
        idx++;
        arrowLeft.classList.remove("disabled");
    } else {
        idx = 5;
        arrowRight.classList.add("disabled");
    }

    activePortfolio();
});

arrowLeft.addEventListener("click", () =>{
    if(idx > 1) {
        idx--;
        arrowRight.classList.remove("disabled");
    } else {
        idx = 0;
        arrowLeft.classList.add("disabled");
    }

    activePortfolio();
});

