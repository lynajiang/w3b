// import './styles.css'
// import curDot from '..'

// // const cursor = document.querySelector('.cursor');


// // document.addEventListener('mousemove', (e) => {
// //     cursor.style.left = e.clientX + 'px';
// //     cursor.style.top = e.clientY + 'px';
// //   })


// const $ = s => document.querySelector(s)

// const cursor = curDot({
//   easing: 4
// })

// cursor.over('.react1', {
//   borderColor: 'rgba(255,255,255,.38)'
// })

// cursor.over('.react2', {
//   scale: .5,
//   background: '#fff'
// })

// cursor.over($('.react3'), {
//   scale: 1.4,
//   background: '#faa2c1',
//   borderColor: 'transparent'
// })

// cursor.over('span.selector', {
//     borderColor: 'rgba(255,255,255,.38)',
//     broderWidth: 2
//   })
  
//   cursor.over($('El'), {
//     scale: .5,
//     background: '#fff'
//   })

let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll('.nav-links li');

window.addEventListener("mousemove, cursor");

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}