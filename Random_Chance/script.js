//function fancyArray(arr){ //defining the function. 

// for(var i=0; i < arr.length; i++){
//     console.log(i + "-> " + arr[i])}
// }
// var myArr = ["James", "Jill", "Jane", "Jack"] //sample data to use with it

// fancyArray(myArr); //calling the function defined above, with "myArr" as ingredient

var jackpot = Math.trunc(Math.random() * 50) + 51;
var chance = Math.trunc(Math.random() * 100) + 1;

function randomChance() {
    for (var i = 100; i >= 0; i--) {
        chance = Math.trunc(Math.random() * 100) + 1;
        console.log(chance + "      quarters left:" + i)
        if (i === 0) {
            console.log(i + " quarters left. I lost everything.")
        }
        if (chance === 16) {
            console.log("I won " + jackpot + " quarters!")
            break;

        }
    }
}
randomChance();