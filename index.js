console.log('index.js is running');

let headerNav = document.querySelector("#headerNav");
let headerNavLinks = document.querySelectorAll("#headerNav li a");

headerNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
        headerNav.classList.remove("show");
    });
});