const switcher = document.getElementById('switch');
const modeChanger = document.getElementById('mode-changer');
const crater1 = document.getElementById('crater1');
const crater2 = document.getElementById('crater2');
const crater3 = document.getElementById('crater3');
let isSwitched = false;

switcher.addEventListener('click', ()=>{
  if(!isSwitched){
    switcher.classList.add('clicked');
    modeChanger.classList.add('clicked');
    crater1.classList.add('clicked');
    crater2.classList.add('clicked');
    crater3.classList.add('clicked');
    isSwitched = true;
  }
  else{
    switcher.classList.remove('clicked');
    modeChanger.classList.remove('clicked');
    crater1.classList.remove('clicked');
    crater2.classList.remove('clicked');
    crater3.classList.remove('clicked');
    isSwitched = false;
  }
});
