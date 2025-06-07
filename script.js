const arr = []; // Global array

// Access input using form
function getInputValue() {
  const form = document.forms["arrayForm"];
  const input = form["userInput"].value.trim();
  return input;
  //return document.forms["arrayForm"]["userInput"].value.trim();
}

function setInputValue(val) {
  document.forms["arrayForm"]["userInput"].value = val;
}

// Add one number
function add() {
  const input = getInputValue();
  const number = parseInt(input);
  if (!isNaN(number)) {
    arr.push(number);
    setInputValue(""); // clear input
  } else {
    alert("Please enter a valid number!");
  }
}

// Reset the array
function resetArray() {
  arr.length = 0;
  showOutputReal("Array has been reset.");
  showOutput("");
  setInputValue("");
}

// Show the array
function show() {
  const result = getArrayFromInput();
  showOutputReal("Original array: " + result.join(", "));
}

// Get array
function getArrayFromInput() {
  return arr;
}

// Display array output
function showOutputReal(text) {
  document.getElementById("outputR").innerText = text;
}

// Display result
function showOutput(text) {
  document.getElementById("output").innerText = text;
}

// 1. Double each element
function runDouble() {
  const arr = getArrayFromInput();
  const result = arr.map(num => num * 2);
  showOutput("Doubled Array: " + result.join(", "));
}

// 2. Filter even numbers
function runEven() {
  const arr = getArrayFromInput();
  const result = arr.filter(num => num % 2 === 0);
  showOutput("Even Numbers: " + result.join(", "));
}

// 3. Sum of all elements
function runSum() {
  const arr = getArrayFromInput();
  const sum = arr.reduce((acc, num) => acc + num, 0);
  showOutput("Sum: " + sum);
}

// 4. Maximum value
function runMax() {
  const arr = getArrayFromInput();
  if (arr.length === 0) {
    showOutput("Array is empty.");
    return;
  }
  const max = arr.reduce((acc, num) => (num > acc ? num : acc), arr[0]);
  showOutput("Maximum Value: " + max);
}

//5. min value
function runMin() {
  const arr = getArrayFromInput();
  if (arr.length === 0) {
    showOutput("Array is empty.");
    return;
  }
  const max = arr.reduce((acc, num) => (num < acc ? num : acc), arr[0]);
  showOutput("Maximum Value: " + max);
}


/// 5. Prime numbers (simplified version)
function runPrimeno() {
  const arr = getArrayFromInput(); // Get the current array

  // Function to check if a number is prime
  function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // Not a prime if divisible by any number from 2 to √num
      }
    }

    return true; // Number is prime
  }

  // Use filter to keep only prime numbers
  const primeNumbers = arr.filter(function (num) {
    return isPrime(num);
  });

  // Show the result
  showOutput("Prime Numbers: " + primeNumbers.join(", "));
}

