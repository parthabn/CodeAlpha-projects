// NAV ACTIVE LINK
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// FADE IN ON SCROLL
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));

// SCROLL PROGRESS BAR
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";
});

// SMOOTH SCROLL
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
