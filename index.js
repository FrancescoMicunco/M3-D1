/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function sum(a, b) {
    if (a == b) {
        return 3 * (a + b)
    } else {
        return a + b
    }
}
sum(3, 3)
    /* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
function checkInt(a, b) {
    let sum = a + b;
    if (a == 50 || b == 50 || sum == 50) {
        return true
    }
}
checkInt(30, 20)
    /* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function removeChar(pos, str) {
    const arrString = str.split("")
    arrString.splice(pos, 1);
    return arrString.toString();
}

removeChar(3, "Alfred")
    /* 4. Create a function to find and return the largest of three given integers. */
function maxVal(a, b, c) {
    let maxNum = a;
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c
    }
}
maxVal(3, 28, 9)


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

function inrange(a, b) {
    if (a >= 40 && a <= 60 || a >= 70 && a <= 100 || b >= 40 && b <= 60 || b >= 70 && b <= 100) {
        return true;
    } else { return false }
}

inrange(30, 60)




/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */


function createCopy(str, n) {
    return str.repeat(n);

}

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
function cityname(str) {
    let startStr = str.split("")
    startStr = str[0] + str[1] + str[2];
    if (startStr === "Los" || startStr === "New") {
        alert(str)
    } else {
        return false
    }
}

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */


function sumArrayElements(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

function checkContent(arr) {
    for (i = 0; i < 2; i++) {
        if (arr[i] == 1 || arr[i] == 3) {
            return true
        } else { return false }
    }

}


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */
function checkContent(arr) {
    for (i = 0; i < 2; i++) {
        if (arr[i] !== 1 && arr[i] !== 3) {
            return true
        } else { return false }
    }

}

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

function longestString(arr) {
    let maxLenghtStr = arr[0].length;
    arr.map(x => maxLenghtStr = Math.max(maxLenghtStr, x.length))
    let result = arr.filter(x => x.length == maxLenghtStr)
    return result;
}


/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
function findAngle(a) {
    let angle = ""
    if (a < 90) {
        return angle = "Acute"
    } else if (a == 90) {
        return angle = "right"
    } else if (a > 90 && a < 180) {
        return angle = "obtuse"
    } else if (a > 180) {
        return angle = "straight"
    }
    console.log(angle)
}


/* function findAngleSwitch(a) {
    switch (a) {
        case (a < 90):
            text = "Acute";
            break;
        case (a = 90):
            test = "right"
        case (a > 90 && a < 180):
            text = "Obtuse";
            break;
        case (a > 180):
            text = "Straight"
        default:
            text = "insert a valid number";
    }
} */
/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

function indexOf(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return arr.indexOf(max);
}

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
function largestEven(arr) {
    let maxEven = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] > maxEven) {
            maxEven = arr[i]
        }
    }
    return maxEven
}

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */