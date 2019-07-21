let burger=document.getElementById('burger');

burger.addEventListener('click',onBurgerClick);
// On ne met pas de parenthèse car ce n'est pas le développeur qui lance la fonction

function onBurgerClick() {
    let navbar=document.querySelector('.navbar');
    navbar.classList.toggle('toggle');
}