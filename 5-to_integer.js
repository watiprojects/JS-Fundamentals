let firstArg = process.argv[2];

let numberArg = (parseInt(firstArg));

if (isNaN(numberArg)){
    console.log("Not a number");
} else {
    console.log(`My number: ${numberArg}`);
}