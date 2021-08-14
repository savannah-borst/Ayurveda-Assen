function openNavFunction() {
    sideNav.style.width = '50%';
}

function closeNavFunction() {
    sideNav.style.width = "0%";
}

const navClose = document.getElementById("closenav");
const navOpen = document.getElementById("opennav");
const sideNav = document.getElementById("mySideNav");

if (navClose) {
    navClose.addEventListener('click', event => {
        closeNavFunction();
    })
}

if (navOpen) {
    navOpen.addEventListener('click', event => {
        openNavFunction();
    })
}



