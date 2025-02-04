const typingText = document.getElementById('typing-text');
const phrases = [
    'Web Developer.',
    'UI/UX Designer.',
    'Java Developer.',
    'Freelancer.',
    'Problem solver.',
    'Tech Enthusiast.'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
}

// Start typing effect
setTimeout(type, 1000);

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});