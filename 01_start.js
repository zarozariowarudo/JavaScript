console.log("Hello world !!!");

// variables
let number = 100;
let email = 'supermail@gmail.com';
let flag = true;
let array = [1, 2, 3, 4, 5];
let summa = function(a, b) { return a + b }

console.log(`Number - ${number}, type : ${typeof(number)}`)
console.log(`Email - ${email}, type : ${typeof(email)}`);
console.log(`Flag - ${flag}, type : ${typeof(flag)}`);
console.log(`Array - ${array}, type : ${typeof(array)}`);
console.log(`Summ - ${summa(2, 2)}, type : ${typeof(summ)}`);

const numbers = [33, 11, 44];

//for
for(let i = 0; i < numbers.length; i++)
{
    console.log(`${i} - ${numbers[i]}`);
}

// forof
for (const num of numbers) // for num in numbers
{
    console.log(num);
}

// foreach
numbers.forEach(num => 
{
    console.log(num);    
});

// forin
for (const key in numbers) // key - index
{
    console.log(key);
}

console.log(numbers.length);
numbers[7] = 77;
console.log(numbers.length);
console.warn("Some warning");
console.error("Very bad error");

if (5 > 3)
    console.log("True");
else 
    console.log("False");

// switch(key)
// {
//     case 5: 
//         break;

//     default: 
//         break;
// }

let message = (3 > 2) ? console.log("Bigger") : console.log("Less");

function divide(a, b)
{
    if (b == 0)
    {
        console.error("Can't divide by zero !!!");
        return;
    }
    return a / b;
}

console.log("Result: " + divide(2, 3));

// let numA = int(prompt("Enter a: "));
let numA = +prompt("Enter a: ");