// var rainbow = document.getElementById('btn');




var night = ['red','green','blue'];

content.onclick = function() { 
    var changer = '#'+Math.floor(Math.random() * 16777215).toString(16);
   this.style.backgroundColor = changer;
 
  
    
}



function changeMode () { 
    var el = document.body;
    el.classList.toggle("dark");
}


