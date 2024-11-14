function rotateImages() {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;
    setInterval(() => {
        images[currentIndex].style.opacity = '0';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = '1';
    }, 5000);
}
document.addEventListener('DOMContentLoaded', rotateImages);