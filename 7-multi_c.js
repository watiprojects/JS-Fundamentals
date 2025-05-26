//store the argument that is given by (or passed) from the user into an variable called PassedArgOne
let x = process.argv[2];
//turn whatever is passed into a number - by default it will be a string
let num = Number(x);

// Extra step if - rounding the number 
let roundNum = Math.round(num);

//used isInteger function because it is more strict and does not convert non numeric values to numbers
// If okay to convert other non numeric values into values could use if (roundNum % 1 === 0){};
if (Number.isInteger(roundNum)) {
        for (i=0; i < roundNum; i++){
            console.log("C is fun")
        }
} else {
    console.log("Missing number of occurrences");
}

