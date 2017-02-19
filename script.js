var name;

function startButton () {
    if (confirm("Disclaimer: we are not responsible for any autism or cancer obtained from this website") == true) {
        name = prompt("Please enter your name", "bryan choy");
        window.location.assign("page2.html");
    }
}

function nextButton (a) {
    var nextSlide = "page".concat(a, ".html");
    window.location.assign(nextSlide);
}
