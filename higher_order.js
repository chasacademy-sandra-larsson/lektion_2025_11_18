// Skapa en egen higher-order funktion 

function compute(n1, n2, callback) {
    return callback(n1, n2);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}


// Anropa higher-order funktionen compute() med add() som callback-funktion
console.log("Add", compute(3,4, add));
console.log("Subtract", compute(3, 4, subtract));


