//store the first argument that is given by (or passed) from the user into an variable
let x = process.argv[2];
//turn whatever is passed into a number - by default it will be a string
let num1 = Number(x);

//store the 2nd argument from the user into an variable
let y = process.argv[3];
//turn whatever is passed into a number - by default it will be a string
let num2 = Number(y);

function add(a,b){
    return a + b;
}

console.log(add(num1,num2));
