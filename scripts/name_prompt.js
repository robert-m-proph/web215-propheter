/* This script welcomes the user by asking for their name. It will also display
the time of day using a date object. */

var day = new Date();       // Creating an object
var hour = day.getHours();  // Getting the current hour
var greeting;
var noName = 'I guess you are nameless?';

// Getting the user's name
var name = prompt('Enter your name!', 'Mr. Deadpool');

// Using an if-else if statement to determine the right greeting 
// based on the time of day.
if (hour >= 17) {
    greeting = 'Good evening ';
}   else if (hour >= 12) {
    greeting = 'Good afternoon ';
}   else if (hour >= 0) {
    greeting = 'Good morning ';
}   else {
    greeting = 'Welcome to my page.';
}

// Displaying the greeting
if (name == '') {
    alert(noName);
    alert(greeting + 'and welcome to my page!');
}   else if (name !== '') {
    alert(greeting + name + '. Welcome to my page!');
}   else if (name == null) {
    alert(greeting + '. Welcome to my page!');
}   else {
    alert(greeting);
}
