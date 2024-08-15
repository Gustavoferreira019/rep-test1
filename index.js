document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const container = document.getElementById('qm-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                title.classList.add('visible');
            } else {
                title.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(container);
});

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title-serv');
    const container = document.getElementById('serv-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                title.classList.add('visible');
            } else {
                title.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(container);
});

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title-orc');
    const container = document.getElementById('orc-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                title.classList.add('visible');
            } else {
                title.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(container);
});