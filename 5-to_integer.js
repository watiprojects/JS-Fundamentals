let firstArg = process.argv[2];

let numberArg = (Number(firstArg));

if (isNaN(numberArg)){
    console.log("Not a number");
} else {
    console.log(Number(firstArg));
}