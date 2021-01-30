var switcher = document.getElementById('switch');
var modeChanger = document.getElementById('mode-changer');
var crater1 = document.getElementById('crater1');
var crater2 = document.getElementById('crater2');
var crater3 = document.getElementById('crater3');
var isSwitched = false;

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
