var menu = document.querySelector('.fa-bars');

menu.addEventListener("click", () => {

    var navegacao = document.querySelector('.menu-nav');
    if(navegacao.style.display === 'none')
        navegacao.style.display = 'block';
    else {
        navegacao.style.display = 'none';
    };
})