
var listQ = [
    ["Bitcoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png"],
    ["Ethereum", "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png"],
    ["BitcoinCash", "https://s2.coinmarketcap.com/static/img/coins/32x32/1831.png"]
   ]
var str;
var ans = [], guessing = [], guessed = []  

function startNewGame() {

   var nQ = 0;
   str = listQ[nQ][1];
   ans = listQ[nQ][0].split("");
   
   ans.forEach(function (e) {
      guessing.push("_");       
   })
   
   document.getElementById("guessing").innerHTML = guessing.join(" ");
   document.getElementById("coin").src = str;
}

document.onkeyup = function (e) {
   var k = e.key;
   guessed.push(k);
   guessing = [];
   ans.forEach(function(e) {
      if (guessed.indexOf(e) >= 0) guessing.push(e);
      else guessing.push('_');
   })
   document.getElementById("guessing").innerHTML = guessing.join(" ");
   document.getElementById("guessed").innerHTML = guessed.join(",");

}


