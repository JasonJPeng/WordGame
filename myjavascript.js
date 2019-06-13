//
// listQ is imported from the external file listQ.js
//
var listQ = [
    ["Bitcoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png"],
    ["Ethereum", "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png"],
    ["BitcoinCash", "https://s2.coinmarketcap.com/static/img/coins/32x32/1831.png"],
    ["Tether", "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png"],
    ["EOS", "https://s2.coinmarketcap.com/static/img/coins/32x32/1765.png"],
    ["Binance Coin", "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png"],
    ["Stellar", "https://s2.coinmarketcap.com/static/img/coins/32x32/512.png"]
   ]

var str;
var ans = [], guessing = [], guessed = []  
var maxGuess

function startNewGame() {

   var nQ = Math.floor(Math.random() * listQ.length);
   
   str = listQ[nQ][0];
   var str1 = str.replace(/\s/g, "").toUpperCase(); // no sapce Upper
   maxGuess = str1.length*2;
   ans = str1.split("");
   guessing = [];
   guessed = [];
   ans.forEach(function (e) {
      guessing.push("_");       
   })
   
   document.getElementById("guessed").innerHTML = "";
   document.getElementById("guessing").innerHTML = guessing.join(" ");
   document.getElementById("coin").src = listQ[nQ][1];
   document.getElementById("count").innerHTML = "You can guess " + maxGuess + " times";
}

document.onkeyup = function (e) {
   var k = e.key;
   guessed.push(k.toUpperCase());
   guessing = [];
   ans.forEach(function(e) {
      if (guessed.indexOf(e) >= 0) guessing.push(e);
      else guessing.push('_');
   })

    document.getElementById("guessing").innerHTML = guessing.join(" ");
    document.getElementById("guessed").innerHTML = guessed.join(",");
    document.getElementById("count").innerHTML = --maxGuess;

   if (maxGuess >= 0 ) {// Keep guessing
        if (guessing.indexOf("_") < 0) { // Got it, No "_" in the array
            alert ("You won. The coin name is :" + str);
            startNewGame();
        }        
   }   else {  // lost the game
        alert ("You don't guess right !");
        startNewGame();
   }

   

}


