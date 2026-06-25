const images = [
    'proyecto1.jpg',
'proyecto2.jpg',
'proyecto3.jpg'
];

let currentIndex = 0;
const imgElement = document.getElementById('carousel-img');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});
