/*

You have read the title: you must guess a sequence. It will have something to do with the number given.
Example

x = 16

result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]

Good luck!

*/

function sequence(x) {
    const result = [];
    for(let i = 1; i <= x; i++) {
        result.push(i);
    }
    return result.sort();
}