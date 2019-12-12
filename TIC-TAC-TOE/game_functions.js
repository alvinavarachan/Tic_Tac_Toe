
// For hide and show the game box and buttons after login

$(document).ready(function(){
  
    $("#box").hide();
    $("#plagain").hide();
    $("#restart").hide();
    $("#score").hide();
  
  $("#btnlog").click(function(){
    $("#box").show();
    $("#plagain").show();
    $("#restart").show();
    $("#score").show();
    restart();
  });

});

var sndx = new Audio("filex.wav");  //Button click sound for X
var sndo = new Audio("fileo.wav");  //Button click sound for 0   
var applause = new Audio("applause.wav");   //Applause sound for winning 

var arr = ["2","2","2","2","2","2","2","2","2"];   //Array initializing
var count=1;        //count initializing
var p1score=0;     //Player-1 score initializing
var p2score=0;    //Player-2 score initializing
var p1name;       //Player 1 name
var p2name;       //Player 2 name



//function to get the name of players and put it in the scoreboard
function username(){
   p1name= document.getElementById("p1name").value;
   p2name= document.getElementById("p2name").value;
  
  document.getElementById("pl1").innerHTML= p1name+"  ( X )";
  document.getElementById("pl2").innerHTML= p2name+"  ( O )";
};



// function for reset the value of button to null and making he button as active
function reset(){
    document.getElementById("0").value = "";
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("4").value = "";
    document.getElementById("5").value = "";
    document.getElementById("6").value = "";
    document.getElementById("7").value = "";
    document.getElementById("8").value = "";

    document.getElementById("0").disabled = false;
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    
    document.getElementById("messege").innerHTML ="";
    document.getElementById("winner").innerHTML ="";
    arr = ["2","2","2","2","2","2","2","2","2"]; 
    count=1;
};


// function for reset the Scorecard 
function restart(){
    reset();
    p1score=0;
    p2score=0;
    document.getElementById("p1score").innerHTML =p1score;
    document.getElementById("p2score").innerHTML =p2score;
  };


// function for disabling all buttons
function disable(){

  document.getElementById("messege").innerHTML ="GAME OVER";
  document.getElementById("0").disabled = true;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
  document.getElementById("7").disabled = true;
  document.getElementById("8").disabled = true;
   
}

 
// function for getting id of buttons and putting value X and 0 inside the buttons
function check(id){

  if (count%2==1){
    document.getElementById(id).value = "X";
    sndx.play();
    sndx.currentTime=0;
    count++; 
    arr[id]=1;
  }
  else{
    document.getElementById(id).value ="O";
    sndo.play();
    sndo.currentTime=0;
    count++;
    arr[id]=0; 
  }
  document.getElementById(id).disabled = true;
  validate();
}




function validate(){

// horizontal checking for player-1
  if (arr[0]==1 && arr[1]==1 && arr[2]==1 || arr[3]==1 && arr[4]==1 && arr[5]==1 || arr[6]==1 && arr[7]==1 && arr[8]==1)
  {
    document.getElementById("winner").innerHTML =p1name+" WON";
    applause.play();
    p1score++;
    disable();
  }

// horizontal checking for player-2
  if (arr[0]==0 && arr[1]==0 && arr[2]==0 || arr[3]==0 && arr[4]==0 && arr[5]==0 || arr[6]==0 && arr[7]==0 && arr[8]==0)
  {
    document.getElementById("winner").innerHTML =p2name+" WON";
    applause.play();
    p2score++;
    disable();
  }

// vertical checking for player-1
  if (arr[0]==1 && arr[3]==1 && arr[6]==1 || arr[1]==1 && arr[4]==1 && arr[7]==1 || arr[2]==1 && arr[5]==1 && arr[8]==1)
  {
    document.getElementById("winner").innerHTML =p1name+" WON";
    applause.play();
    p1score++;
    disable();
  }

// vertical checking for player-2
  if (arr[0]==0 && arr[3]==0 && arr[6]==0 || arr[1]==0 && arr[4]==0 && arr[7]==0 || arr[2]==0 && arr[5]==0 && arr[8]==0)
  {
    document.getElementById("winner").innerHTML =p2name+" WON";
    applause.play();
    p2score++;
    disable();
  }


// diagonal checking for player-1
  if (arr[0]==1 && arr[4]==1 && arr[8]==1 || arr[2]==1 && arr[4]==1 && arr[6]==1 )
  {
    document.getElementById("winner").innerHTML =p1name+" WON";
    applause.play();
    p1score++;
    disable();
  }

// diagonal checking for player-2
  if (arr[0]==0 && arr[4]==0 && arr[8]==0 || arr[2]==0 && arr[4]==0 && arr[6]==0 )
  {
    document.getElementById("winner").innerHTML =p2name+" WON";
    applause.play();
    p2score++;
    disable();
  }

  if(count==10)
  {
    var a= document.getElementById("messege").innerHTML;
    
    if (a=="")
    {
    document.getElementById("messege").innerHTML ="GAME OVER";
    document.getElementById("winner").innerHTML ="MATCH DRAW";
    }
  }

document.getElementById("p1score").innerHTML =p1score;
document.getElementById("p2score").innerHTML =p2score;
};




