var messages = document.querySelector('.messages');
messages.addEventListener('click', function (e) {
    let target = e.target;
    if(target.classList.contains('remove-button')){
        target.parentNode.classList.add('hide');
    }
});