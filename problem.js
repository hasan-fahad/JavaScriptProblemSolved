//TASK 1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
  }
  
  
  const exampleInput1 = "hello world";
  const reversedOutput = reverseString(exampleInput1);
  console.log(reversedOutput); 

//   Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  
  const exampleInput2 = [2, -5, 10, -3, 7];
  const sumOutput = sumOfPositiveNumbers(exampleInput2);
  console.log(sumOutput);   
  
//   Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

//   Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
  
function findMostFrequentElement(arr) {
    
    const frequencyCounter = {};
  
    
    for (let num of arr) {
      frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }
  
    
    let mostFrequentElement;
    let highestFrequency = 0;
  
    for (let num in frequencyCounter) {
      if (frequencyCounter[num] > highestFrequency) {
        highestFrequency = frequencyCounter[num];
        mostFrequentElement = num;
      }
    }
  
    return Number(mostFrequentElement);
  }
  
  const exampleInput3 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const outputFrequentElement = findMostFrequentElement(exampleInput3);
  console.log(outputFrequentElement); 
  

//   Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null;
  }
 
  const exampleInput = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const output = findTwoNumbersWithSum(exampleInput, targetValue);
  console.log(output); 
  
//   Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Error: Division by zero is not allowed!";
        }
      default:
        return "Error: Invalid operator!";
    }
  }
  

  console.log(calculator(5, '+', 3)); 
  console.log(calculator(10, '-', 4)); 
  console.log(calculator(6, '*', 5)); 
  console.log(calculator(15, '/', 3)); 
  console.log(calculator(10, '/', 0)); 
  console.log(calculator(8, '%', 3)); 
  

//   Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=[]{}|:;"<>,.?/';
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  
//   Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentNumeral = roman[i];
      const nextNumeral = roman[i + 1];
  
      if (romanNumerals[currentNumeral] < romanNumerals[nextNumeral]) {
        result += romanNumerals[nextNumeral] - romanNumerals[currentNumeral];
        i++; 
      } else {
        result += romanNumerals[currentNumeral];
      }
    }
  
    return result;
  }
  
  
  console.log(romanToInt("IX")); 
  console.log(romanToInt("XXI")); 
  console.log(romanToInt("IV")); 
  console.log(romanToInt("XLII")); 
  console.log(romanToInt("MMXXI")); 
  