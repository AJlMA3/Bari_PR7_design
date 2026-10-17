let button = document.getElementById("myButton");
let text = document.getElementById("text");

button.addEventListener("click", function() {
    text.textContent = "Кнопка была нажата!";
    text.style.color = "green";
    text.style.fontSize = "22px";
});

function changeBackground() {
    document.body.style.backgroundColor = "#e0e0e0";
}