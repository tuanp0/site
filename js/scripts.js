import './header.js';
// import './preintro.js';
import './about.js';

document.addEventListener("DOMContentLoaded", function() {

    function updateOpacity() {
        const eltA = document.querySelectorAll(".site__global");
        const eltB = document.querySelectorAll(".js-opacity");
        const distance = 500;

        eltA.forEach((elementA, index) => {
            const elementB = eltB[index];
            if (!elementB) return;
            
            const rect = elementA.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.docuementElement.clientHeight;
                        
            if(rect.bottom <= 0 || rect.top >= windowHeight || window.innerWidth < 768 || (window.innerWidth < 768 && elementB.style.opacity == 1)) {
                elementB.style.opacity = 1;
                return;
            }

            const scrollIn = Math.min(Math.max(windowHeight - rect.top - 30, 0), distance * 1);

            const ratio = scrollIn / distance;

            const newOpacity = Math.max(0, 1 - ratio);
            elementB.style.opacity = newOpacity.toFixed(2);
        });
    }

    const bodyElt = document.querySelectorAll("body");
    const headerElt = document.querySelectorAll(".header");
    const introElt = document.querySelectorAll(".intro");
    const contactElt = document.querySelectorAll(".contact");

    setTimeout(() => { introElt[0].classList.add('animated-opacity'); }, 3700)
    setTimeout(() => { headerElt[0].classList.add('animated'); }, 5200)
    setTimeout(() => { introElt[0].classList.add('animated-height'); }, 5200)
    setTimeout(() => { contactElt[0].classList.add('animated'); }, 5200)

    window.addEventListener('scroll', updateOpacity);
    window.addEventListener('resize', updateOpacity);
    window.addEventListener('load', updateOpacity);
});