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

