const hamburgerBars = document.querySelector('.fa-bars')
const crossButton = document.querySelector('.close')
const menuDropDown = document.querySelector('.hamburger-menu')

hamburgerBars.addEventListener('click', function(){
  menuDropDown.classList.add('active');
})

crossButton.addEventListener('click', function(){
  menuDropDown.classList.remove('active');
})
