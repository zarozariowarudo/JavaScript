//1.1
const currentYear = 2026;
let input = +prompt("Enter your birth year: ");
alert("You are " + (currentYear - input) + " y.o.");

//1.2
input = +prompt("Enter num of your gigabytes: ")
alert("You can upload " + ((input*1024 / 820) | 0) + " 820mb files");

//2.1
input = +prompt("Enter num from 1-9: ");
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
alert("Its " + symbols[input - 1]);

//2.2
function isLeap(year)
{
    if (year % 400 == 0|| (year % 4 == 0 && year % 100 != 0))
        return true;
    else 
        return false;
}

input = +prompt("Enter year: ");
if (isLeap(input))
    alert("It's leap");
else 
    alert("It's not leap");

//2.3
let year = +prompt("Enter year");
let month = +prompt("Enter month");
let day = +prompt("Enter day");
let day_in_month;

if (!isLeap(year))
    day_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
else
    day_in_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let next_day = day + 1;
let next_month = month;
let next_year = year; 

if (next_day > day_in_month[month - 1])
{
    next_day = 1;
    next_month++;

    if (next_month > 12)
    {
        next_month = 1;
        next_year++;
    }
}

alert("Next date is: " + next_day + "." + next_month + "." + next_year);




