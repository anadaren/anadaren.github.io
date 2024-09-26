fetch('/src/components/navbar.html')
.then(res => res.text())
.then(text => {
    let oldElem = document.querySelector("script#replace_with_navbar");
    let newElem = document.createElement("div");
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChild(newElem,oldElem);
})
.then(text => {
    /* Mobile Hamburger Menu */
    const hamMenu = document.querySelector('#ham');
    const hamElements = document.querySelector('.off-screen-menu ul');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click',()=> {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    });

    hamElements.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    });
})