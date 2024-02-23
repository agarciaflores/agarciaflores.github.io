const menuButton = document.querySelector('.menuButton');
const menuClass = document.querySelector('.menuClass');

function checkScreenSize() {
    var width = window.innerWidth
        document.documentElement.clientWidth
        document.body.clientWidth;

    var height = window.innerHeight
        document.documentElement.clientHeight
        document.body.clientHeight;
    
    const isOpened = menuButton.getAttribute('aria-expanded');
    
    if (width > 600) {
        menuClass.style.display = 'flex';
        menuButton.setAttribute('aria-expanded', 'true');
    } else {
        menuClass.style.display = 'none';
        menuButton.setAttribute('aria-expanded', 'false');
    }
}

window.addEventListener('resize', checkScreenSize);

menuButton.addEventListener('click', () => {
    const isOpened = menuButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
      menuButton.setAttribute('aria-expanded', 'true');
      menuClass.style.display = 'flex';
    } else {
      menuButton.setAttribute('aria-expanded', 'false');
      menuClass.style.display = 'none';
    }
});
  
