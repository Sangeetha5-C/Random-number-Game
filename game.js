var guessnumber = document.getElementById("guessnumber")
var result= document.getElementById("result")
let randomnumber= Math.floor(Math.random()*10)+1
function check()
{
    var enterednumber = guessnumber.value
    if(randomnumber==enterednumber)
    {
        console.log("right");
        alert("YOU WON...")
    }
    else{
        console.log("wrong");
        alert("YOU LOSE")
    }

}
var num = document.getElementById("number")
num.style.color="red"

