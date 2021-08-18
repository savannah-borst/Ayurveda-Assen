
window.addEventListener('load', () => {

    function openNavFunction() {
        sideNav.style.width = '50%';
    }
    
    function closeNavFunction() {
        sideNav.style.width = "0%";
    }
    
    const navClose = document.getElementById("closeNav");
    const navOpen = document.getElementById("openNav");
    const sideNav = document.getElementById("mySideNav");
    
    navOpen.addEventListener('click', openNavFunction)

    navClose.addEventListener('click', closeNavFunction)

})


