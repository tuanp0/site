document.addEventListener("DOMContentLoaded", function() {

    function inViewport(elt) {
        if(window.innerWidth > 768) {
            const sites = document.querySelectorAll(elt);

            const observerSite = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && window.innerWidth > 768) {
                        entry.target.classList.add('is-active');
                    } else {
                        entry.target.classList.remove('is-active');
                    }
                });
            }, {
                rootMargin: '0px',
                threshold: 0
            });

            sites.forEach(site => observerSite.observe(site));
        }
    }

    function centerOnScroll(activeElt) {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        const links = document.querySelectorAll(activeElt);

        links.forEach(link => {
            const parentTop = link.parentElement.getBoundingClientRect().top + scrollY;
            const targetY = scrollY + viewportHeight / 2 - parentTop - link.offsetHeight / 2;
            if(window.innerWidth >= 768) {
                link.style.transform = `translateY(${targetY}px)`;
            } else {
                const baseClass = activeElt.replace('.is-active ', '');
                document.querySelectorAll(baseClass).forEach(el => {
                    el.style.transform = '';
                });
            }
        });
    }

    window.addEventListener('load', () => inViewport('.site__solo'));
    window.addEventListener('resize', () => inViewport('.site__solo'));

    window.addEventListener('scroll', () => centerOnScroll('.is-active .site__link'));
    window.addEventListener('scroll', () => centerOnScroll('.is-active .site__solo__bandeau'));
    window.addEventListener('resize', () => centerOnScroll('.is-active .site__link'));
    window.addEventListener('resize', () => centerOnScroll('.is-active .site__solo__bandeau'));

});