//1
let arr = [];
for (let i = 0; i < 20; i++)
{
    arr[i] = Math.random() * 100;
}

//2
for (const key in arr) {
    console.log(`[${key}] - ${arr[key]}`); 
}

//3
function checkNum7(arr)
{
    arr.forEach(element => {
        if (element % 7 == 0) return true;
    });
    return false;
}
console.log(checkNum7(arr));

//4
arr.sort((a, b) => b - a);
for (const key in arr) {
    console.log(`[${key}] - ${arr[key]}`); 
}

//5
for(let i = arr.length / 2; i < arr.length; i++)
{
    arr[i] = 0;
}

//6
for (let i = 0; i < 3; i++) arr.shift();

//7
function isUnique(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == arr[i+1]);
    }
}
isUnique(arr);

//8
let newArr = arr;
newArr.pop();
newArr.shift();

//9
function countEven(arr)
{
    let count = 0;
    arr.forEach(element => {
        if (element % 2 == 0) count++;
    });
    return count;
}
