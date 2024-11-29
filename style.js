
document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector(".container")
    

 

    noButton.addEventListener('mouseenter', () => {
        const vpWidth = window.innerWidth;
        const vpheight = window.innerHeight;

        const newLeft = Math.random() * (vpWidth - noButton.offsetWidth);
        const newTop = Math.random() * (vpheight - noButton.offsetHeight);

        noButton.style.position='absolute';

        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });
});

