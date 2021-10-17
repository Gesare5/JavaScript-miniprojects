const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    // get random number between 0 - 3; use it as an index to acces array values
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// set up random number generator
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}