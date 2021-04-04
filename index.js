const dices =["images/dice1.png","images/dice2.png","images/dice3.png", "images/dice4.png",
     "images/dice5.png", "images/dice6.png"]
    
        
    


document.querySelector(".container").onclick = function() {

     let showDice1 = Math.floor(Math.random()* dices.length)
     let showDice2 = Math.floor(Math.random()* dices.length)
    

document.querySelector(".img1").setAttribute("src", dices[showDice1])
document.querySelector(".img2").setAttribute("src", dices[showDice2])

if(showDice1==showDice2){
     document.querySelector("h1").innerHTML ="Draw!"

}else if(showDice1 > showDice2){
     document.querySelector("h1").innerHTML= "🚩Play1 wins!"
}else {
     document.querySelector("h1").innerHTML= "Play2 wins!🚩"
}

}

