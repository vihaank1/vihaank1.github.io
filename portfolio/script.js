/* ==========================
   DARK MODE
========================== */


const themeToggle = document.getElementById(
    "theme-toggle"
);


const savedTheme =
    localStorage.getItem("theme");


if(savedTheme === "dark"){

    document.body.classList.add("dark");

    if(themeToggle)
        themeToggle.textContent="☀️";

}



if(themeToggle){

themeToggle.addEventListener(
"click",
()=>{


document.body.classList.toggle(
    "dark"
);


const dark =
document.body.classList.contains(
    "dark"
);



if(dark){

    localStorage.setItem(
        "theme",
        "dark"
    );

    themeToggle.textContent="☀️";

}

else{

    localStorage.setItem(
        "theme",
        "light"
    );

    themeToggle.textContent="🌙";

}


});

}




/* ==========================
   TERMINAL TYPING EFFECT
========================== */


const terminalOutputs =
document.querySelectorAll(
    ".terminal-output"
);



terminalOutputs.forEach(
(element,index)=>{


const text =
element.textContent;


element.textContent="";


let character=0;



setTimeout(()=>{


const typing =
setInterval(()=>{


element.textContent +=
text.charAt(character);


character++;


if(character >= text.length){

clearInterval(typing);

}



},50);



},index*1200);



});





/* ==========================
   SCROLL REVEAL
========================== */


const revealElements =
document.querySelectorAll(
".section, .project-card, .glass-card, .timeline-item"
);



revealElements.forEach(
element=>{

element.style.opacity="0";

element.style.transform=
"translateY(40px)";

element.style.transition=
"all .8s ease";

}

);



const observer =
new IntersectionObserver(

entries=>{


entries.forEach(
entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform=
"translateY(0)";


}


});


},

{

threshold:.15

}

);



revealElements.forEach(
element=>{

observer.observe(element);

});






/* ==========================
   NAVBAR EFFECT
========================== */


const navbar =
document.querySelector(
".navbar"
);



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){


navbar.style.boxShadow =
"0 20px 50px rgba(0,0,0,.12)";


navbar.style.padding =
"12px 30px";


}

else{


navbar.style.boxShadow =
"none";


navbar.style.padding =
"18px 30px";


}


});






/* ==========================
 ACTIVE NAVIGATION
========================== */


const sections =
document.querySelectorAll(
"section[id]"
);



const links =
document.querySelectorAll(
".nav-links a"
);



window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(
section=>{


const top =
section.offsetTop - 200;



if(window.scrollY >= top){

current =
section.id;

}


});



links.forEach(
link=>{


link.style.color="";


if(
link.getAttribute("href")
===
"#"+current
){

link.style.color=
"#2563eb";

}


});



});






/* ==========================
 CARD TILT EFFECT
========================== */


const cards =
document.querySelectorAll(
".project-card"
);



cards.forEach(
card=>{


card.addEventListener(
"mousemove",
(event)=>{


const rect =
card.getBoundingClientRect();



const x =
event.clientX -
rect.left;


const y =
event.clientY -
rect.top;



const rotateX =
((y / rect.height)-.5)*8;


const rotateY =
((x / rect.width)-.5)*8;



card.style.transform =
`
perspective(800px)
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





/* ==========================
 BUTTON CLICK FEEDBACK
========================== */


document.querySelectorAll(
"a"
)
.forEach(
button=>{


button.addEventListener(
"mousedown",
()=>{


button.style.transform=
"scale(.96)";


});


button.addEventListener(
"mouseup",
()=>{


button.style.transform="";


});


});
