let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll('.nav-links li');
let fancy = document.querySelector(".fancy");

window.addEventListener("mousemove", cursor);
document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x',(e.clientX)+'px');
    document.documentElement.style.setProperty('--y',(e.clientY)+'px');
  }
  
function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navlinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove("hovered-link");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add("hovered-link");
    });
});

fancy.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('fancy-grow');
    fancy.classList.remove("hovered-fancy");
});
fancy.addEventListener('mouseover', () => {
    mouseCursor.classList.add('fancy-grow');
    fancy.classList.add("hovered-fancy");
});

const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '70%',
        scrub: 1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '250%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

tl.fromTo('.logo', {y:0}, {y: -400})
tl2.fromTo('.fancy', {scale:6}, {scale:1, top:"2rem", left:"3rem", x:"50%", y:"50%"})
tl3.to

