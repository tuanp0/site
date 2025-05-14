document.addEventListener("DOMContentLoaded", function() {

    let body = document.getElementsByTagName('body')[0];
    if (!body.classList.contains('test')) {
        body.classList.add('test');
    }

});