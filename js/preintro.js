document.addEventListener("DOMContentLoaded", function() {
    function CursorBlink() {
        const cursor = document.querySelectorAll(".preintro__name__cursor");
        let visible = true;

        setInterval(() => {
            cursor.forEach(c => {
                c.style.opacity = visible ? "0" : "1";
            });
            visible = !visible;
        }, 600);
    }

    function TypingName(lettersParent, letters) {
        const body = document.body;
        const fullText = document.querySelectorAll(lettersParent);
        const letter = document.querySelectorAll(letters);
        const delays = [800, 1000, 1200, 1250, 1600, 1700, 1900, 2000];
        const lastDelay = delays[delays.length - 1] + 400;

        letter.forEach((item, key) => {
            setTimeout(() => {
                item.style.display = "inline-block";
            }, delays[key] ?? (120000 + key * 200));
        });

        setTimeout(() => {
            fullText[0].classList.add('hide');
        }, lastDelay + 1000);

        setTimeout(() => {
            body.classList.add("scroll");
        }, lastDelay + 1300);

        setTimeout(() => {
            AnimBands();
        }, lastDelay + 1500);
    }

    function AnimBands() {
        const bands = document.querySelectorAll(".preintro__band__item");
        const preintroLayer = document.querySelectorAll(".preintro");
        bands.forEach(band => band.classList.add("animated"));
        setTimeout(() => {preintroLayer.forEach(layer => layer.classList.add("animated"));}, 1000);
    }

    CursorBlink();
    TypingName(".preintro__name", ".preintro__name__item");
});