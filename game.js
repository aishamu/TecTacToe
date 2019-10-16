let Container = document.getElementById('Container');
let items=document.querySelectorAll(".item");

var cell = new Array(9);

for (var i=0; i<9; i++) {
cell[i] = 0;
}

 
 
function Place(value) {
  if (cell[value] == 0) {
    items[value].innerHTML="X";
    cell[value] = 1;
    if (Check() == true) {
    
      let result = document.createElement("h1")
      //here we have to remove the existing child first, otherwise the "you win! tags are going to appear on top of each other in the page if we keep playing"
      Container.removeChild(Container.firstChild);
      result.innerText ="Congrats!!! You won"
      Container.appendChild(result)
      setTimeout(function(){GameOver();},1000);//it's better to wait for some interval before removing the current game so we can see what the last move was

      // GameOver();
    }
    else if(!CheckNobody()){//if no body has won check if the board is full yet
     
      let result = document.createElement("h1")
      result.innerText ="it's a tie"
      Container.appendChild(result)
      GameOver();


    }
    else{
      ComputerTurn();
      // CheckNobody(); I commented this line out becuase it's better to include this check in the computer's function
    }
  }
}

function ComputerTurn() {
   

  // for (i= Math.floor(Math.random()*8); i<9; i++) {
  //   if (cell[i] == 0){
    //     PutHere = i;
    //    }
  //    }

  //I addded the while loop here so we can keep genrating random numbers if the index of the random number we genrated is already full
  //also I changed Math.random()*8 form *8 to *9 so we can get random numbers from 0 to 8
  let i=Math.floor(Math.random()*9);
  while(cell[i] != 0){
    i=Math.floor(Math.random()*9);
  }
  let PutHere = i;

  items[PutHere].innerHTML="O";
   cell[PutHere] = 2;
  
  if (Check() == true) {
    let result = document.createElement("h1")
    Container.removeChild(Container.firstChild);

    result.innerText ="Your opponent won"
  Container.appendChild(result)
  setTimeout(function(){GameOver();},1000);

    // GameOver();
  } else if(!CheckNobody()){//if no body has won check if the board is full yet
    let result = document.createElement("h1")
    result.innerText ="it's a tie"
    Container.appendChild(result)
    GameOver();

  }
 
}

function Check() {
  if (cell[0] == cell[1] && cell[1] == cell[2] && cell[2] > 0) 
    return true; 
  if (cell[3] == cell[4] && cell[4] == cell[5] && cell[5] > 0) 
    return true;
  if (cell[6] == cell[7] && cell[7] == cell[8] && cell[8] > 0) 
    return true;
  if (cell[6] == cell[3] && cell[3] == cell[0] && cell[0] > 0)
    return true;
  if (cell[7] == cell[4] && cell[4] == cell[1] && cell[1] > 0) 
    return true;
  if (cell[8] == cell[5] && cell[5] == cell[2] && cell[2] > 0) 
    return true;
  if (cell[6] == cell[4] && cell[4] == cell[2] && cell[2] > 0) 
    return true;
  if (cell[0] == cell[4] && cell[4] == cell[8] && cell[8] > 0)
    return true;
}

function CheckNobody() {
  let no = false;
  for (i=0; i<9; i++){//Edited: you were messing the for loop braces here

  if (cell[i] == 0) {
  no = true;
  }
}

  return no; //we're returning the value here so we can use it in checking wether it's a tie or not
}

function GameOver() {
  for (i=0; i<9; i++) 
  {
    cell[i] = 0;
    items[i].innerHTML='';
  }
}