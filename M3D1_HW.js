/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function sum(a, b) {
    if (a == b) {
        console.log(3 * (a + b))
    } else {
        console.log(a + b)
    }
}

sum(3, 3)
sum(3, 2)

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function check(a, b) {
    if (a == 50 || b == 50 || (a + b) == 50) {
        console.log(true)
    } else {
        console.log(false)
    }
}

check(50, 40)
check(25, 25)
check(20, 20)
    /*
    3)
    Create a function to remove a character at the specified position of a given string and return the new string.
    */
function remove(oldStirng, pos) {
    let newStirng = oldStirng.slice(0, pos) + oldStirng.slice(pos + 1)
    console.log(newStirng)
}
remove('Hello World', 3)
    /*

    4)
     Create a function to find the largest of three given integers.
    */
function largest(a, b, c) {
    if (a > b & a > c) {
        console.log(`${a} is largest`)
    } else if (b > a & b > c) {
        console.log(`${b} is largest`)
    } else if (c > a & c > b) {
        console.log(`${c} is largest`)
    }
}
largest(23, 45, 44)
    /*
    5)
    Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
    */
function range(a, b) {
    if ((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) {
        console.log('given numbers are in range of 40 and 60')
    } else if ((a >= 70 && a <= 100) && (b >= 70 && b <= 100)) {
        console.log('given numbers are in range of 70 and 100')
    } else {
        console.log('one or both the numbers are not in range')
    }
}

range(43, 43)
range(33, 63)
range(93, 93)
range(133, 133)
    /*
    6) 

    Create a function to create a new string of specified copies (positive number) of a given string.
    */
function copies(givenString, numOfCopies) {
    let newString = ''
    for (let i = 1; i <= numOfCopies; i++) {
        newString += givenString
    }
    console.log(newString)
}
copies('Pavan', 3)
    /*

    7)
    Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
    */
function city(cityName) {
    if (cityName.charAt(0) == 'L' && cityName.charAt(1) == 'o' && cityName.charAt(2) == 's') {
        console.log("Los Angeles")
    } else if (cityName.charAt(0) == 'N' && cityName.charAt(1) == 'e' && cityName.charAt(2) == 'w') {
        console.log('New York')
    } else {
        console.log(' ')
    }
}
city('Los Angeles')
city('New Jersey')
city('Dublin')
    /*
    8)
    Create a function to calculate the sum of three elements of a given array of integers of length 3.
    */
function sumOfArray(givenArray) {
    let sum = 0
    if (givenArray.length != 3) {
        console.log('provide an array with length 3')
    } else {
        for (let i = 0; i < givenArray.length; i++) {
            sum += givenArray[i]
        }
    }
    console.log(sum)
}
sumOfArray([1, 2, 3])
    /*

    9)
    Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
    */

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

15)

Create a function to check from two given integers, whether one is positive and another one is negative.

16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/