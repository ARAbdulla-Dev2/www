document.addEventListener('DOMContentLoaded', function () {
    // Animation observer
    const fadeElements = document.querySelectorAll('.fadeInUp');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });

    // Smooth scrolling on click
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    

    // Smooth scroll on page load with hash
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }, 300);
        }
    }

    // Yellow stars
    const yellowStars = document.querySelector('.yellow-stars');
    if (yellowStars) {
        for (let i = 0; i < 30; i++) {
            const star = document.createElement('span');
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            yellowStars.appendChild(star);
        }
    }

    // Shooting stars
    const shootingStars = document.querySelector('.shooting-stars');
    if (shootingStars) {
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.style.top = Math.random() * 50 + '%';
            star.style.left = Math.random() * 50 + 50 + '%';
            star.style.animationDelay = (Math.random() * 10) + 's';
            shootingStars.appendChild(star);
        }
    }
});