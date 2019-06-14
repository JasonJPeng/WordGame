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
    ["Stellar", "https://s2.coinmarketcap.com/static/img/coins/32x32/512.png"],
    ["Dash", "https://s2.coinmarketcap.com/static/img/coins/32x32/131.png"],
    ["Monero", "https://s2.coinmarketcap.com/static/img/coins/32x32/328.png"],
    ["TRON", "https://s2.coinmarketcap.com/static/img/coins/32x32/1958.png"],
    ["Cardano", "https://s2.coinmarketcap.com/static/img/coins/32x32/2010.png"],
    ["Cosmos", "https://s2.coinmarketcap.com/static/img/coins/32x32/3794.png"],
    ["Tezos", "https://s2.coinmarketcap.com/static/img/coins/32x32/2011.png"],
    ["IOTA", "https://s2.coinmarketcap.com/static/img/coins/32x32/1720.png"],
    ["NEM", "https://s2.coinmarketcap.com/static/img/coins/32x32/873.png"],
    ["Ethereum Classic", "https://s2.coinmarketcap.com/static/img/coins/32x32/1321.png"],
    ["Maker", "https://s2.coinmarketcap.com/static/img/coins/32x32/1518.png"],
    ["Zcash", "https://s2.coinmarketcap.com/static/img/coins/32x32/1437.png"],
    ["Chainlink", "https://s2.coinmarketcap.com/static/img/coins/32x32/1975.png"],
    ["Bitcoin Gold", "https://s2.coinmarketcap.com/static/img/coins/32x32/2083.png"],
    ["BAT", "https://s2.coinmarketcap.com/static/img/coins/32x32/1697.png"],
    ["Dogecoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/74.png"],
    ["Qtum", "https://s2.coinmarketcap.com/static/img/coins/32x32/1684.png"],
    ["OmiseGO", "https://s2.coinmarketcap.com/static/img/coins/32x32/1808.png"],
    [" Zilliqa", "https://s2.coinmarketcap.com/static/img/coins/32x32/2469.png"],
    ["Augur", "https://s2.coinmarketcap.com/static/img/coins/32x32/1104.png"],
    ["0x", "https://s2.coinmarketcap.com/static/img/coins/32x32/1896.png"],
    ["Steem", "https://s2.coinmarketcap.com/static/img/coins/32x32/1230.png"],
    ["Siacoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/1042.png"],
    ["WAX", "https://s2.coinmarketcap.com/static/img/coins/32x32/2300.png"],
    ["Zcoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/1414.png"],
    ["Litecoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/2.png"]
   ]

var str;
var ans = [], guessing = [], guessed = []  
var maxGuess
var wins=0, losses=0;
// var snd = new Audio("media/beep.mp3"); // buffers automatically when created
// snd.play();

var winSnd = new Audio("media/Rooster.mp3");
var lossSnd = new Audio("media/Police.mp3");
var audio = new Audio("media/beep-short.mp3");
// audio.src = ;
// audio.play();

function startNewGame() {

   var nQ = Math.floor(Math.random() * listQ.length);

//    audio.play();
   
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

  if (guessed.indexOf(k.toUpperCase()) < 0 ) { // repetitive

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
            winSnd.play();
            document.getElementById("wins").innerHTML = ++wins;
            document.getElementById("guessing").innerHTML = guessing.join(" ");
            alert ("You won. The coin name is :" + str);
            
            startNewGame();            
        }        
    }   else {  // lost the game
        lossSnd.play();
        document.getElementById("losses").innerHTML = ++losses;
        document.getElementById("guessed").innerHTML = guessed.join(",");
        alert ("You don't guess right !");
        
        startNewGame();
    }

  } else {
      audio.play();
  }

}


