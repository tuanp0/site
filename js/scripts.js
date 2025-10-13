import './header.js';

document.addEventListener("DOMContentLoaded", function() {

    function updateOpacity() {
        const eltA = document.querySelectorAll(".site__global");
        const eltB = document.querySelectorAll(".about__content");
        const distance = 800;

        eltA.forEach((elementA, index) => {
            const elementB = eltB[index];
            if (!elementB) return;

            const rect = elementA.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.docuementElement.clientHeight;
            
            if(rect.bottom <= 0 || rect.top >= windowHeight || rect.width < 768 || (rect.width < 768 && elementB.style.opacity == 1)) {
                elementB.style.opacity = 1;
                return;
            }

            const scrollIn = Math.min(Math.max(windowHeight - rect.top - 30, 0), distance * 1);

            const ratio = scrollIn / distance;

            const newOpacity = Math.max(0, 1 - ratio);
            elementB.style.opacity = newOpacity.toFixed(2);
        });
    }

    window.addEventListener('scroll', updateOpacity);
    window.addEventListener('resize', updateOpacity);
    window.addEventListener('load', updateOpacity);
});