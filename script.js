alert("Hello!");

function buttonFunction() {
    var x;
    if (confirm("Click a button!") == true) {
        x = "you clicked ok!"
    } else {
        x = "You clicked cancel!"
    }
    document.getElementById("test").innerHTML = x;
}
