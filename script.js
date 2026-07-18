document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // --- Ticker: duplicate content once for a seamless -50% loop ---
    const tickerTrack = document.getElementById('tickerTrack');
    if (tickerTrack) {
        tickerTrack.innerHTML += tickerTrack.innerHTML;
    }

    // --- Mobile navigation ---
    const closeMenu = () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navbar.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navbar.classList.toggle('menu-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // --- Navbar state on scroll ---
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Reveal-on-scroll animations ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // --- FAQ accordion (Sparkgreen page) ---
    const faqItems = document.querySelectorAll('.sg-faq');

    const setFaqState = (item, open) => {
        const btn = item.querySelector('.sg-faq-btn');
        const answer = item.querySelector('.sg-faq-answer');
        item.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
        answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0';
    };

    faqItems.forEach(item => {
        setFaqState(item, item.classList.contains('open'));

        item.querySelector('.sg-faq-btn').addEventListener('click', () => {
            const willOpen = !item.classList.contains('open');
            faqItems.forEach(other => setFaqState(other, false));
            setFaqState(item, willOpen);
        });
    });
});
