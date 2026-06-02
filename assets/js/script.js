/* ========================================
   Narendra's Dental Clinic - Interactive Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---- Preloader ----
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        setTimeout(() => preloader.classList.add('hidden'), 800);
        setTimeout(() => preloader.style.display = 'none', 1300);
    });

    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 80);
        backToTop.classList.toggle('visible', scrollY > 500);

        // Active nav link based on scroll
        updateActiveNavLink();
    });

    // ---- Mobile Menu ----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // ---- Active Nav Link ----
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                document.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === `#${id}`) {
                        a.classList.add('active');
                    }
                });
            }
        });
    }

    // ---- Scroll Animations ----
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // ---- Counter Animation ----
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

    function animateCounter(element, target) {
        const duration = 2000;
        const start = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(update);
    }

    // ---- Back to Top ----
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---- Contact Form → Send to WhatsApp ----
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        // Build WhatsApp message
        const whatsappNumber = '917013822659'; // India country code + number
        const text = `🦷 *New Appointment Request*\n\n` +
            `👤 *Name:* ${name}\n` +
            `📧 *Email:* ${email}\n` +
            `📞 *Phone:* ${phone}\n` +
            `🩺 *Service:* ${service}\n` +
            `💬 *Message:* ${message || 'N/A'}`;

        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappURL, '_blank');

        // Show success message
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Redirecting to WhatsApp...';
        btn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    });

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---- Hero parallax effect ----
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.3}px)`;
            }
        });
    }
});
