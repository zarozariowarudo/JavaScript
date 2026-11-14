//1
function countSpaces(str)
{
    let count = 0;
    str.forEach(element => {
        if (element == ' ') count++;
    });
    return count;
}

//2
function chane1l(str)
{
    str[0].toupper();
}

//3
function countWords(str)
{
    let arr = str.split(' ');
    return arr.length;
}

//4
function makeAbbreviation(str)
{
    arr = str.split(' ');
    let nstr;

    for(let i = 0; i < arr.length; i++)
    {
        nstr += arr[i][0].toupper();
    }

    return nstr;
}

//5
function isPalindrome(str)
{
    return str.isPalindrome();
}

//6
function lookURL(surl)
{
    arr = surl.split('/');
    console.log(arr);

    console.log(`Protocol: ${(arr[0]).replace(':', '')}`)
    console.log(`Domen: ${arr[2]}`)
    let way = '/' + arr.slice(3).join('/');
    console.log(`Way: ${way}`);
}
console.log(lookURL("https://itstep.org/ua/about"));