// Interactividad de íconos
const navItems = document.querySelectorAll('.nav-links a, .social-icons a');

navItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
