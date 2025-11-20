const slides = document.querySelectorAll('.banner .slide');
let index = 0;

setInterval(() => {
    slides[index].style.display = 'none';
    index = (index + 1) % slides.length;
    slides[index].style.display = 'flex';
}, 3000);
