const submitBtn = document.querySelector('.form-submit');

if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
        const form = this.closest('form');
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        const subject = document.getElementById('subject')?.value;
        const message = document.getElementById('message')?.value;
        const checkbox = document.querySelector('.form-checkbox input')?.checked;
        
        if (!name || !email || !subject || !message || !checkbox) {
            return;
        }
        
        e.preventDefault();
        
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            startVelocity: 20,
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
        });
        
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 0.6, x: 0.3 },
                startVelocity: 25,
            });
        }, 150);
        
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 0.6, x: 0.7 },
                startVelocity: 25,
            });
        }, 300);
        
        this.classList.add('confetti-pop');
        setTimeout(() => this.classList.remove('confetti-pop'), 300);
        
        alert('🎉 Спасибо! Ваш вопрос отправлен! 🎉');
        form.reset();
        
        setTimeout(() => window.location.href = '#', 500);
    });
}
/* Карусель с рандомными фотографиями */
const initRandomCarousel = () => {
    const carouselItems = {
        farPrev: document.querySelector('.carousel-item.far-prev'),
        prev: document.querySelector('.carousel-item.prev'),
        active: document.querySelector('.carousel-item.active'),
        next: document.querySelector('.carousel-item.next'),
        farNext: document.querySelector('.carousel-item.far-next')
    };
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    if (!carouselItems.active || !prevButton || !nextButton) return;

    const photoPaths = [
        'img/изображения/кофебон.jpg',
        'img/изображения/бренд.тэ.1.jpg',
        'img/изображения/бренд.тэ.2.jpg',
        'img/изображения/бренд.тэ.3.jpg',
        'img/изображения/бренд.тэ.4.jpg',
    
    ];

    const shuffle = (arr) => arr
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    let currentIndex = 0;
    const order = shuffle(photoPaths);

    const getIndex = (offset) => (currentIndex + offset + order.length) % order.length;

    const showImages = () => {
        carouselItems.farPrev.src = order[getIndex(-2)];
        carouselItems.prev.src = order[getIndex(-1)];
        carouselItems.active.src = order[getIndex(0)];
        carouselItems.next.src = order[getIndex(1)];
        carouselItems.farNext.src = order[getIndex(2)];

        carouselItems.farPrev.alt = `Фото ${getIndex(-2) + 1}`;
        carouselItems.prev.alt = `Фото ${getIndex(-1) + 1}`;
        carouselItems.active.alt = `Фото ${getIndex(0) + 1}`;
        carouselItems.next.alt = `Фото ${getIndex(1) + 1}`;
        carouselItems.farNext.alt = `Фото ${getIndex(2) + 1}`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = getIndex(-1);
        showImages();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = getIndex(1);
        showImages();
    });

    showImages();
};

initRandomCarousel();