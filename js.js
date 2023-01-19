
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

// const cursor = cursorDot({
//   // diameter in pixels
//   diameter: 80,
//   // border width
//   borderWidth: 1,
//   // border color
//   borderColor: '#fff',
//   // easing
//   easing: 4,
//   // background
//   background: 'transparent'
  
// })

// const positionElement = (e) => {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
// }

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
})
// document.addEventListener('mousemove', function(e){
//   var x = e.clientX;
//   var y = e.clientY;
//   cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
// });

// document.addEventListener('mousemove', function(e){
//   var x = e.clientX;
//   var y = e.clientY;
//   cursorinner.style.left = x + 'px';
//   cursorinner.style.top = y + 'px';
// });

// document.addEventListener('mousedown', function(){
//   cursor.classList.add('click');
//   cursorinner.classList.add('cursorinnerhover')
// });

// document.addEventListener('mouseup', function(){
//   cursor.classList.remove('click')
//   cursorinner.classList.remove('cursorinnerhover')
// });

// a.forEach(item => {
//     item.addEventListener('mouseover', () => {
//       cursor.classList.add('hover');
//     });
//     item.addEventListener('mouseleave', () => {
//       cursor.classList.remove('hover');
//     });
//   })

