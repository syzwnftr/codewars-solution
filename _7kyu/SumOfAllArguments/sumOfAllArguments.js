/*

Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15


*/



//solution #1
function sum() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}


//solution #2
function sum() {
    let total = [];
    for(let i = 0; i < arguments.length; i++) {
        total.push(arguments[i]);
    }
    return total.reduce((acc, total) => acc + total, 0);
}