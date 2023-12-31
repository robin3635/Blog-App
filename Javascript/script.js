const menu = document.querySelector('.drop-down');
document.querySelector('.menu-open').addEventListener(
    'click', () =>{
        menu.style.right = "0";
    }
);

document.querySelector('.menu-close').addEventListener(
    'click', () => {
        menu.style.right = "-100%";
    }
);