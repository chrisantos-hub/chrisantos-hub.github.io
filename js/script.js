let currentIndex = 0;

    function showImage(index) {
        const carouselImages = document.getElementById('carouselImages');
        const totalImages = carouselImages.children.length;
        currentIndex = (index + totalImages) % totalImages;
        carouselImages.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    }

    function nextImage() {
        showImage(currentIndex + 1);
    }

    function prevImage() {
        showImage(currentIndex - 1);
    }

    // Auto-play function
    setInterval(nextImage, 5000); // Change image every 3 seconds
    function toggleNavbar() {
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle("active");
    }
    