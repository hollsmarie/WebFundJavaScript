//function fancyArray(arr){ //defining the function. 

// for(var i=0; i < arr.length; i++){
//     console.log(i + "-> " + arr[i])}
// }
// var myArr = ["James", "Jill", "Jane", "Jack"] //sample data to use with it

// fancyArray(myArr); //calling the function defined above, with "myArr" as ingredient

//Create a program that prints output:
// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonelcopy

var students = {};
studentsDojo = [
    { 
    first_name: 'Michael', 
    last_name: 'Jordan',
    height: '7.0',
    age: '45',
    type: 'student'
},
{ 
    first_name: 'John',
    last_name: 'Rosales',
    height: '6.6',
    age: '32',
    type: 'student'
},
{ 
    first_name: 'Mark', 
    last_name: 'Guillen',
    height: '7.0',
    age: '29',
    type: 'student'
},
{ 
    first_name: 'KB', 
    last_name: 'Tonel',
    height: '6.0',
    age: '19',
    type: 'student'
}
];

// console.log(students.first_name, students.last_name);

var studentNames = [];
for ( var students in studentsDojo) {
    console.log(studentsDojo[students].first_name, studentsDojo[students].last_name);
    // if((studentsDojo[students].height> '5.11' && studentsDojo[students].type == 'student')) {
    //  console.log(students.first_name, students.last_name)
    // }
}

// console.log(studentNames);



// var numPurchase = 0;
// for (var donut in glazedDonuts) {
//     console.log(glazedDonuts[donut].type);
//     if ((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds') {
//         numPurchase++;
//     }
//     else {
//         console.log('not this donut...');
//     }
// }
// console.log(numPurchase);