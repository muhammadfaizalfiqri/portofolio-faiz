const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if(navMenu.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});