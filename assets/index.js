document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Glitter effect
    const createGlitter = () => {
        const glitter = document.createElement('div');
        glitter.classList.add('glitter');
        glitter.style.left = `${Math.random() * 100}vw`;
        glitter.style.top = `${Math.random() * 100}vh`;
        glitter.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(glitter);

        glitter.addEventListener('animationend', () => {
            glitter.remove();
        });
    };

    setInterval(createGlitter, 500);

    // Typing effect for the tagline
    const tagline = "Finance and Business Analytics Professional";


    function typeWriter() {
        if (i < tagline.length) {
            taglineElement.innerHTML += tagline.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});