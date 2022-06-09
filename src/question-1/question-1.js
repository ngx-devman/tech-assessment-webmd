/* Question-1: reverse Array */

// Option-1: with while loop

function reverseArr(default_arr) {
    let leftIndex = 0;
    let rightIndex = default_arr.length - 1;
    while (leftIndex < rightIndex) {
        let temp = default_arr[leftIndex];
        default_arr[leftIndex] = default_arr[rightIndex];
        default_arr[rightIndex] = temp;
        leftIndex ++;
        rightIndex--;
    }
    return default_arr
}

// Option-2: with forEach()

function reverseArr(default_arr) {
    let reversedArr = [];
    default_arr.forEach(elem => {
        reversedArr.unshift(elem)
    });
    return reversedArr
}

// Option-3: with for loop

function reverseArr(default_arr) {
    let reversedArr = [];
    for (let i = default_arr.length -1; i >= 0; i--) {
        reversedArr.push(default_arr[i])
    }
    return reversedArr
}

console.log(reverseArr(['Dog', 'Cat', 'Bear', 'Whale']))

/* Question-1: palindrome string check */

// Option-1: with while loop

function palindromeStr(str) {
    let i = 0;
    let temp = str.toLowerCase().split('')
    let j = temp.length - 1
    while(j > 1) {
        if (temp[i++] !== temp[j--]) {
            return false
        }
    }
    return true
}

// Option-2: with reverse and join

function palindromeStr(str) {
    str = str.toLowerCase()
    return str === str.split("").reverse().join("")
}

console.log(palindromeStr('eye'))
