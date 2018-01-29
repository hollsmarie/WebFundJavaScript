
var daysUntilMyBirthday = 228;
while (daysUntilMyBirthday <= 228) {
     if(daysUntilMyBirthday >=30){ 
     console.log( daysUntilMyBirthday + " days." + " I have to wait so long..");
     daysUntilMyBirthday = daysUntilMyBirthday - 1;}
     if(daysUntilMyBirthday<30 && daysUntilMyBirthday > 5){
         console.log( daysUntilMyBirthday + " days." + " It's almost my birthday!");
         daysUntilMyBirthday = daysUntilMyBirthday - 1;}
    if(daysUntilMyBirthday <=5 && daysUntilMyBirthday >=2) {
        console.log( daysUntilMyBirthday +" days." + " It's almost my birthday!");
        daysUntilMyBirthday = daysUntilMyBirthday - 1;}
    if(daysUntilMyBirthday == 1){
        console.log( daysUntilMyBirthday +" day." + " Tomorrow is my birthday!");
        daysUntilMyBirthday = daysUntilMyBirthday - 1;}
    if(daysUntilMyBirthday == 0){
        console.log("HAPPY BIRTHDAY!!");
        break;
        }
    }




// var num = 1;
// while (num < 6) {
//     console.log("I'm counting! The number is " + num);
//     num = num + 1;
// }
// console.log("We are done. Goodbye world!");