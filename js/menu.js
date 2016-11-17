"use strict";
var menu = document.querySelector('.tree');

menu.addEventListener('click', function (e) {
    let target = e.target;
    if(!target.firstElementChild.classList.contains('sub-menu')) return;
    if(target.firstElementChild.classList.contains('sub-menu')){
        target.firstElementChild.classList.toggle('active');
    }
});