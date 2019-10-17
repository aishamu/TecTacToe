let Container = document.getElementById('Container');
let items=document.querySelectorAll(".item");

var cell = new Array(9);

for (var i=0; i<9; i++) {
cell[i] = 0;
}


function Place(value) {
  if (cell[value] == 0) {
    items[value].innerHTML='<m style=" color: #8ac7db "> X</m>';
    cell[value] = 1;
    if (Check() == true) {

        Swal.fire("You won")
      setTimeout(function(){GameOver();},1000);
    }
    else if(!CheckNobody()){

 
      Swal.fire("it's a tie")
       GameOver();
    }
    else{
      setTimeout(function(){ ComputerTurn();},1010);
     }
  }
}

function ComputerTurn() {

  let i=Math.floor(Math.random()*9);
  while(cell[i] != 0){
    i=Math.floor(Math.random()*9);
  }
  let PutHere = i;

  items[PutHere].innerHTML="O";
   cell[PutHere] = 2;

  if (Check() == true) {
 
    Swal.fire("Your opponent won")
   setTimeout(function(){GameOver();},1000);

   } else if(!CheckNobody()){
   
    Swal.fire("it's a tie")
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
  for (i=0; i<9; i++){

  if (cell[i] == 0) {
  no = true;
  }
}

  return no;
}

function GameOver() {
  for (i=0; i<9; i++)
  {
    cell[i] = 0;
    items[i].innerHTML='';
  }
}
