document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
                card.classList.add('animate__fadeIn');
            } else {
                card.style.display = 'none';
                card.classList.remove('animate__fadeIn');
            }
        });
    }

    // Show first card initially
    showCard(currentIndex);

    // Next button click
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    // Previous button click
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });
});