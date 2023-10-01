//PART 1
let amButton = document.querySelector('#am');
let pmButton = document.querySelector('#pm');

amButton.addEventListener("click", () => {
    let greetingHeading = document.querySelector('#greeting');
    greetingHeading.innerHTML = "Good morning!";
});
pmButton.addEventListener("click", () => {
    let greetingHeading = document.querySelector('#greeting');
    greetingHeading.innerHTML = "Good night!";
});

//PART 2
let redButton = document.querySelector('#red');
let yellowButton = document.querySelector('#yellow');
let greenButton = document.querySelector('#green');
let blueButton = document.querySelector('#blue');

redButton.addEventListener("click", () => {
    let colorDiv = document.querySelector('#div_color');
    colorDiv.setAttribute("class", "bg_red")
});
yellowButton.addEventListener("click", () => {
    let colorDiv = document.querySelector('#div_color');
    colorDiv.setAttribute("class", "bg_yellow")
});
greenButton.addEventListener("click", () => {
    let colorDiv = document.querySelector('#div_color');
    colorDiv.setAttribute("class", "bg_green")
});
blueButton.addEventListener("click", () => {
    let colorDiv = document.querySelector('#div_color');
    colorDiv.setAttribute("class", "bg_blue")
});