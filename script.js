// ===========================
// Dark / Light Theme Toggle
// ===========================


const themeBtn = document.querySelector(".theme-btn");
const icon = document.querySelector(".theme-btn i");


themeBtn.onclick = () => {


    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){

        icon.classList.replace(
            "fa-moon",
            "fa-sun"
        );

    }

    else{

        icon.classList.replace(
            "fa-sun",
            "fa-moon"
        );

    }


};




// ===========================
// Active Navbar Link
// ===========================


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");



window.onscroll = () => {


    let current="";


    sections.forEach(section=>{


        let top = window.scrollY;


        let offset = section.offsetTop - 150;


        let height = section.offsetHeight;


        let id = section.getAttribute("id");



        if(top >= offset && top < offset + height){

            current=id;

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }


    });



};




// ===========================
// Smooth Scroll
// ===========================


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        e.preventDefault();


        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });


    });


});