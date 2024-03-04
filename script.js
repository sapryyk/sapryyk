function moveButton() {
    var button = document.getElementById("noButton");
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

document.getElementById("yesButton").addEventListener("click", function() {
    alert("Ура!");
});
