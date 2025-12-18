// Reveal elements on scroll for a premium feel
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .about-content');
    elements.forEach(el => {
        const speed = 150;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - speed) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

// Initial State for Animation
document.querySelectorAll('.service-card, .about-content').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);