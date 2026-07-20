/* =========================
   DARK MODE TOGGLE
========================= */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}


themeToggle.addEventListener("click", () => {


    document.body.classList.toggle("dark");


    const darkMode =
        document.body.classList.contains("dark");


    if (darkMode) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    }


});



/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const revealElements = document.querySelectorAll(
    ".section, .project-card, .glass-card, .timeline-item"
);



revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});



const revealObserver = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},

{

threshold:0.15

}

);



revealElements.forEach(element=>{

    revealObserver.observe(element);

});




/* =========================
   ACTIVE NAV LINK
========================= */


const sections =
document.querySelectorAll(
"section"
);


const navLinks =
document.querySelectorAll(
".nav-links a"
);



window.addEventListener(
"scroll",
()=>{


let current="";


sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;


if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.style.color="";


if(
link.getAttribute("href")
===
"#"+current
){

link.style.color =
"#2563eb";

}


});


}

);




/* =========================
   NAVBAR SHRINK EFFECT
========================= */


const navbar =
document.querySelector(
".navbar"
);



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){


navbar.style.padding =
"12px 25px";


navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.08)";


}

else {


navbar.style.padding =
"18px 25px";


navbar.style.boxShadow =
"none";


}


});




/* =========================
   PROJECT CARD TILT EFFECT
========================= */


const cards =
document.querySelectorAll(
".project-card"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
((y / rect.height)-0.5)*8;


const rotateY =
((x / rect.width)-0.5)*8;



card.style.transform =
`
perspective(700px)
rotateX(${-rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});


card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"translateY(0)";


});


});



/* =========================
   SMOOTH BUTTON FEEDBACK
========================= */


const buttons =
document.querySelectorAll(
"a"
);



buttons.forEach(button=>{


button.addEventListener(
"click",
()=>{


button.style.transform =
"scale(.96)";


setTimeout(()=>{


button.style.transform =
"";


},150);


});


});
