'use strict';

const addHeaderBackground = () => {
  
  const startCount = 250;
  let header = document.querySelector('.header');

  if(window.pageYOffset > startCount) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }

}

window.onscroll = addHeaderBackground;
addHeaderBackground();