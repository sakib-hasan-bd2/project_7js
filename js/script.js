let background = document.querySelector('.background');
let astronaut = document.querySelector('.astronaut');
let moon = document.querySelector('.moon');

background.addEventListener('mousemove', (e) => {
  console.log(e.clientX, e.clientY);
  astronaut.style.left = e.clientY / 60 + '%';
  astronaut.style.top = e.clientX / 50 + '%';
})