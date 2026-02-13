// Challenge 1a - No Errors, just added to check if the number is zero as well.
let number = 4;

if (number % 2 === 0) {
    console.log("This number is even.");
} 
else if (number === 0) {
    console.log("This number is zero.");
} 
else {
    console.log("This number is odd.");
}


// Challenge 1b - Error Fixed: the messages in both console.log()s where swapped, 
// now the correct message will be displayed based on the age condition.
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");  
} 
else {
    console.log("You are not eligible to vote.");      
}


//Challenge 1c - No Errors
let num = -5;
if (num > 0) {
    console.log("This number is positive.");
} else if (num < 0) {
    console.log("This number is negative.");
} else {
    console.log("This number is zero.");
}


// Challenge 2a - No Errors
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Challenge 2b - No Errors
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Challenge 2c - Error Fixed: The loop was not running because the condition was incorrect. 
// It should be i <= num2 instead of i < num2 to include the number 5 in the factorial calculation.
let num2 = 5;
let factorial = 1;
for (let i = 1; i <= num2; i++) { 
    factorial *= i;
}
console.log("Factorial is:", factorial);


// Challenge 3a - No Errors
function greet(name) {
    console.log("Hello, " + name);
}
greet("Alice");


// Challenge 3b - No Errors
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(7));


// Challenge 3c - No Errors, but I had to make text lowercase to count both uppercase and lowercase vowels.
function countVowels(text) {
    let vowels = "aeiou";
    let count = 0;

    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Vowel count:", countVowels("Hello"));


// Challenge 4a - No Errors
let fruits = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}


// Challenge 4b - No Errors
let students = {
    Alice: 90,
    Bob: 85,
    Charlie: 88
}
for (let name in students) {
    console.log(name + ": " + students[name]);
}

// Challenge 4c - No Errors
let numbers = [5, 10, 3, 8, 20];
function findHighest(nums) {
    let highest = nums[0];
    for (let num of nums) {
        if (num > highest) {
            highest = num;
        }
    }
    return highest;
}
console.log("Highest number:", findHighest(numbers));