// GIVEN
// var example;
// console.log(example);
// example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// console.log(example);
// var example = "I'm the example!";    

// 1
// console.log(hello);                                   
// var hello = 'world';                                 
// prediction: undefined

// interpreter
// var hello;
// console.log(hello);
// hello = 'world';

// 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// prediction: magnet
// interprter
// var needle = 'haystack';
// function test(){
//     needle = 'magnet';
//     console.log(needle);
// }
// test();


// 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// prediction: only okay only okay, wrong print() is never called
// interpreter
// var brendan = 'super cool';
// console.log(brendan);

// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// prediction chicken half-chicken
// interpreter
// var food = 'chicken';
// console.log(food);
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// eat();

// 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// prediction
// chicken fish fish fish, wrong mean is not a function so it returns an error


// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// prediction 
// disco rock r&b r&b, wrong undefined rock r&b disco
// interpreter
// var genre;
// console.log(genre);
// genre = "disco";
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// rewind();
// console.log(genre);

// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// prediction 
// error dojo doesn't get instantiated except in the function so it can't be console logged or changed maybe, wrong it doesn't matter that it's in the function
// interpreter
// var dojo
// dojo = "sanjose";
// console.log(dojo);
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// learn();
// console.log(dojo);

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// prediction error in else if since an object cannot be converted into a string
