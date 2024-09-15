// Store website templates
const templates = [
    {
      html: `<!-- Basic HTML structure -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Portfolio</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <h2>About Me</h2>
      <p>This is a simple portfolio website template.</p>
    </section>
    <footer>
      <p>&copy; 2024 My Portfolio</p>
    </footer>
  </body>
  </html>`,
      css: `/* Basic styles for the portfolio */
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  header {
    background-color: #4CAF50;
    color: white;
    padding: 1em;
    text-align: center;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  
  section {
    padding: 20px;
  }
  
  footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: white;
  }`,
      js: `// No JavaScript needed for this template`
    },
    {
      html: `<!-- Landing page HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="hero">
      <h1>Welcome to Our Service</h1>
      <p>We're here to help you succeed.</p>
      <button>Get Started</button>
    </div>
  </body>
  </html>`,
      css: `/* Styles for a basic landing page */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
  }
  
  .hero {
    height: 100vh;
    background-color: #3498db;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  button {
    background-color: #fff;
    color: #3498db;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2em;
    border-radius: 5px;
  }`,
      js: `// No JavaScript needed for this template`
    },
    {
      html: `<!-- Blog page HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header>
      <h1>Welcome to My Blog</h1>
    </header>
    <main>
      <article>
        <h2>Post Title</h2>
        <p>This is a sample blog post to demonstrate HTML and CSS.</p>
      </article>
    </main>
    <footer>
      <p>&copy; 2024 My Blog</p>
    </footer>
  </body>
  </html>`,
      css: `/* Styles for a simple blog */
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  header {
    background-color: #333;
    color: white;
    padding: 1em;
    text-align: center;
  }
  
  main {
    padding: 20px;
  }
  
  article {
    margin-bottom: 20px;
  }
  
  footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: white;
  }`,
      js: `// No JavaScript needed for this template`
    },
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Interactive Image Gallery HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Interactive Image Gallery</h1>
    <div class="gallery">
      <img src="image1.jpg" alt="Image 1">
      <img src="image2.jpg" alt="Image 2">
      <img src="image3.jpg" alt="Image 3">
    </div>
    <script src="script.js"></script>
  </body>
  </html>
      `,
      css: `/* Image gallery styles */
  .gallery {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .gallery img {
    width: 150px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .gallery img:hover {
    transform: scale(1.1);
  }
      `,
      js: `// No JavaScript needed for this template`
    }
    ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Simple Quiz HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Simple Quiz</h1>
    <div id="quiz">
      <p>What is the capital of France?</p>
      <input type="text" id="answer" placeholder="Your answer">
      <button id="submitAnswer">Submit</button>
      <p id="result"></p>
    </div>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Quiz form styles */
  #quiz {
    margin-top: 20px;
  }
  
  input {
    padding: 8px;
    margin-right: 10px;
  }
      `,
      js: `// Simple Quiz with conditionals
  document.getElementById('submitAnswer').addEventListener('click', () => {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    const result = document.getElementById('result');
  
    if (answer === 'paris') {
      result.textContent = 'Correct!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Incorrect, the correct answer is Paris.';
      result.style.color = 'red';
    }
  });	
      `
    }
    ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Change Background Color HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Background Color Changer</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Change Background Color</h1>
    <button id="changeColorBtn">Change Color</button>
    <script src="script.js"></script>
  </body>
  </html>
      `,
      css: `/* Button for changing background color */
  button {
    padding: 10px 20px;
    font-size: 1.2em;
    margin-top: 20px;
    cursor: pointer;
  }
      `,
      js: `// Change background color with DOM manipulation
  document.getElementById('changeColorBtn').addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  });	
      `
    }
    ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- To-Do List HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button id="addTaskBtn">Add Task</button>
    <ul id="taskList"></ul>
    <script src="script.js"></script>
  </body>
  </html>
      `,
      css: `/* To-Do list styles */
  input, button {
    padding: 10px;
    margin: 10px 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
      `,
      js: `// To-do list using arrays and DOM manipulation
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  document.getElementById('addTaskBtn').addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
      taskInput.value = '';  // Clear input field
    }
  });	
      `
    }
    ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Countdown Timer HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Timer</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Countdown Timer</h1>
    <p id="countdown"></p>
    <script src="script.js"></script>
  </body>
  </html>
      `,
      css: `/* Countdown timer styles */
  #countdown {
    font-size: 2em;
    margin-top: 20px;
    color: #FF5733;
  }
      `,
      js: `// Countdown timer using setInterval
  let timeLeft = 10;
  const countdownElement = document.getElementById('countdown');
  
  const timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      countdownElement.textContent = 'Time’s up!';
    } else {
      countdownElement.textContent = timeLeft + ' seconds remaining';
    }
    timeLeft--;
  }, 1000);	
      `
    }
    ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Image Slider HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slider</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Image Slider</h1>
    <div class="slider">
      <button id="prevBtn">Previous</button>
      <img id="sliderImage" src="image1.jpg" alt="Slider Image">
      <button id="nextBtn">Next</button>
    </div>
    <script src="script.js"></script>
  </body>
  </html>
      `,
      css: `/* Image slider styles */
  .slider {
    display: flex;
    align-items: center;
  }
  
  img {
    width: 300px;
    margin: 0 10px;
  }
      `,
      js: `// Image slider using arrays and event handling
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  let currentIndex = 0;
  
  const sliderImage = document.getElementById('sliderImage');
  
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    sliderImage.src = images[currentIndex];
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    sliderImage.src = images[currentIndex];
  });	
      `
    }
    ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Tip Calculator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tip Calculator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Tip Calculator</h1>
    <input type="number" id="billAmount" placeholder="Enter bill amount">
    <input type="number" id="tipPercentage" placeholder="Enter tip percentage">
    <button id="calculateTipBtn">Calculate Tip</button>
    <p id="tipResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Tip Calculator Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Tip calculator using simple math
  var billAmount = document.getElementById('billAmount');
  var tipPercentage = document.getElementById('tipPercentage');
  var calculateTipBtn = document.getElementById('calculateTipBtn');
  var tipResult = document.getElementById('tipResult');
  
  calculateTipBtn.addEventListener('click', function() {
    var bill = parseFloat(billAmount.value);
    var tip = parseFloat(tipPercentage.value);
    if (!isNaN(bill) && !isNaN(tip)) {
      var tipAmount = (bill * tip) / 100;
      tipResult.textContent = 'Tip: $' + tipAmount.toFixed(2);
    } else {
      tipResult.textContent = 'Please enter valid numbers';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Number Guessing Game HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guessing Game</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Guess the Number</h1>
    <input type="number" id="guessInput" placeholder="Enter a number between 1-10">
    <button id="checkGuessBtn">Check Guess</button>
    <p id="result"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Number Guessing Game Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Number guessing game using random numbers
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  var checkGuessBtn = document.getElementById('checkGuessBtn');
  var guessInput = document.getElementById('guessInput');
  var result = document.getElementById('result');
  
  checkGuessBtn.addEventListener('click', function() {
    var userGuess = parseInt(guessInput.value);
    if (userGuess === randomNumber) {
      result.textContent = 'Correct! You guessed the number!';
    } else {
      result.textContent = 'Incorrect! Try again.';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- BMI Calculator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>BMI Calculator</h1>
    <input type="number" id="weight" placeholder="Weight in kg">
    <input type="number" id="height" placeholder="Height in meters">
    <button id="calculateBmiBtn">Calculate BMI</button>
    <p id="bmiResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* BMI Calculator Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// BMI Calculator using math
  var weightInput = document.getElementById('weight');
  var heightInput = document.getElementById('height');
  var calculateBmiBtn = document.getElementById('calculateBmiBtn');
  var bmiResult = document.getElementById('bmiResult');
  
  calculateBmiBtn.addEventListener('click', function() {
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      var bmi = weight / (height * height);
      bmiResult.textContent = 'Your BMI: ' + bmi.toFixed(2);
    } else {
      bmiResult.textContent = 'Please enter valid weight and height.';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Countdown to New Year HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown to New Year</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Countdown to New Year</h1>
    <p id="countdown"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Countdown Timer Styles */
  p {
    font-size: 2em;
    color: #FF5733;
    margin-top: 20px;
  }
  
      `,
      js: `// Countdown to New Year using Date object
  var countdownElement = document.getElementById('countdown');
  
  function updateCountdown() {
    var now = new Date();
    var newYear = new Date(now.getFullYear() + 1, 0, 1);
    var timeDifference = newYear - now;
    
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    countdownElement.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
  }
  
  setInterval(updateCountdown, 1000);
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Temperature Converter HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Converter</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Temperature Converter</h1>
    <input type="number" id="celsiusInput" placeholder="Celsius">
    <button id="convertBtn">Convert to Fahrenheit</button>
    <p id="result"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Temperature Converter Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Temperature converter using simple event handling
  var celsiusInput = document.getElementById('celsiusInput');
  var convertBtn = document.getElementById('convertBtn');
  var result = document.getElementById('result');
  
  convertBtn.addEventListener('click', function() {
    var celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
      var fahrenheit = (celsius * 9/5) + 32;
      result.textContent = 'Fahrenheit: ' + fahrenheit.toFixed(2);
    } else {
      result.textContent = 'Please enter a valid number.';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Multiplication Table HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Table</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Multiplication Table</h1>
    <input type="number" id="tableNumber" placeholder="Enter number">
   
      `,
      css: `/* Multiplication Table Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  #tableResult {
    margin-top: 20px;
    font-size: 1.2em;
  }
  
      `,
      js: `// Multiplication table using loops
  var tableNumber = document.getElementById('tableNumber');
  var generateTableBtn = document.getElementById('generateTableBtn');
  var tableResult = document.getElementById('tableResult');
  
  generateTableBtn.addEventListener('click', function() {
    var number = parseInt(tableNumber.value);
    tableResult.innerHTML = '';
    if (!isNaN(number)) {
      for (var i = 1; i <= 10; i++) {
        var row = document.createElement('p');
        row.textContent = number + ' x ' + i + ' = ' + (number * i);
        tableResult.appendChild(row);
      }
    } else {
      tableResult.textContent = 'Please enter a valid number.';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Age Calculator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Calculator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Age Calculator</h1>
    <input type="date" id="birthdate">
    <button id="calculateAgeBtn">Calculate Age</button>
    <p id="ageResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Age Calculator Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Age calculator using Date object
  var birthdateInput = document.getElementById('birthdate');
  var calculateAgeBtn = document.getElementById('calculateAgeBtn');
  var ageResult = document.getElementById('ageResult');
  
  calculateAgeBtn.addEventListener('click', function() {
    var birthdate = new Date(birthdateInput.value);
    var today = new Date();
    
    var age = today.getFullYear() - birthdate.getFullYear();
    var month = today.getMonth() - birthdate.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    
    ageResult.textContent = 'Your age is: ' + age;
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Palindrome Checker HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome Checker</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Palindrome Checker</h1>
    <input type="text" id="wordInput" placeholder="Enter a word">
    <button id="checkPalindromeBtn">Check Palindrome</button>
    <p id="palindromeResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Palindrome Checker Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Palindrome checker using string manipulation
  var wordInput = document.getElementById('wordInput');
  var checkPalindromeBtn = document.getElementById('checkPalindromeBtn');
  var palindromeResult = document.getElementById('palindromeResult');
  
  checkPalindromeBtn.addEventListener('click', function() {
    var word = wordInput.value.toLowerCase().replace(/[\W_]/g, '');
    var reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
      palindromeResult.textContent = 'Yes, it is a palindrome!';
    } else {
      palindromeResult.textContent = 'No, it is not a palindrome.';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Simple Calculator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Simple Calculator</h1>
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <button id="addBtn">Add</button>
    <button id="subtractBtn">Subtract</button>
    <button id="multiplyBtn">Multiply</button>
    <button id="divideBtn">Divide</button>
    <p id="calcResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Simple Calculator Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Simple calculator using basic math operations
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');
  var addBtn = document.getElementById('addBtn');
  var subtractBtn = document.getElementById('subtractBtn');
  var multiplyBtn = document.getElementById('multiplyBtn');
  var divideBtn = document.getElementById('divideBtn');
  var calcResult = document.getElementById('calcResult');
  
  addBtn.addEventListener('click', function() {
    var result = parseFloat(num1.value) + parseFloat(num2.value);
    calcResult.textContent = 'Result: ' + result;
  });
  
  subtractBtn.addEventListener('click', function() {
    var result = parseFloat(num1.value) - parseFloat(num2.value);
    calcResult.textContent = 'Result: ' + result;
  });
  
  multiplyBtn.addEventListener('click', function() {
    var result = parseFloat(num1.value) * parseFloat(num2.value);
    calcResult.textContent = 'Result: ' + result;
  });
  
  divideBtn.addEventListener('click', function() {
    var result = parseFloat(num1.value) / parseFloat(num2.value);
    calcResult.textContent = 'Result: ' + result;
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Word Count Tool HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Count Tool</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Word Count Tool</h1>
    <textarea id="textInput" placeholder="Enter your text here"></textarea>
    <button id="countWordsBtn">Count Words</button>
    <p id="wordCountResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Word Count Tool Styles */
  textarea {
    margin: 10px;
    padding: 10px;
    width: 300px;
    height: 150px;
  }
  
  button, p {
    margin: 10px;
    padding: 10px;
  }
  
      `,
      js: `// Word count tool using string length
  var textInput = document.getElementById('textInput');
  var countWordsBtn = document.getElementById('countWordsBtn');
  var wordCountResult = document.getElementById('wordCountResult');
  
  countWordsBtn.addEventListener('click', function() {
    var text = textInput.value.trim();
    var wordCount = text ? text.split(/\s+/).length : 0;
    wordCountResult.textContent = 'Word count: ' + wordCount;
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Dice Roller HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Roller</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Dice Roller</h1>
    <button id="rollDiceBtn">Roll Dice</button>
    <p id="diceResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Dice Roller Styles */
  button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.5em;
    color: #333;
  }
  
      `,
      js: `// Dice roller using random numbers
  var rollDiceBtn = document.getElementById('rollDiceBtn');
  var diceResult = document.getElementById('diceResult');
  
  rollDiceBtn.addEventListener('click', function() {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = 'You rolled: ' + diceRoll;
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Unit Converter HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unit Converter</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Unit Converter</h1>
    <input type="number" id="metersInput" placeholder="Meters">
    <button id="convertToFeetBtn">Convert to Feet</button>
    <p id="conversionResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Unit Converter Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Unit converter from meters to feet
  var metersInput = document.getElementById('metersInput');
  var convertToFeetBtn = document.getElementById('convertToFeetBtn');
  var conversionResult = document.getElementById('conversionResult');
  
  convertToFeetBtn.addEventListener('click', function() {
    var meters = parseFloat(metersInput.value);
    if (!isNaN(meters)) {
      var feet = meters * 3.28084;
      conversionResult.textContent = meters + ' meters is ' + feet.toFixed(2) + ' feet';
    } else {
      conversionResult.textContent = 'Please enter a valid number';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Loan Calculator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Loan Calculator</h1>
    <input type="number" id="loanAmount" placeholder="Loan Amount">
    <input type="number" id="interestRate" placeholder="Interest Rate (%)">
    <input type="number" id="loanTerm" placeholder="Term (years)">
    <button id="calculateLoanBtn">Calculate Payment</button>
    <p id="loanResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Loan Calculator Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Loan calculator with interest formula
  var loanAmount = document.getElementById('loanAmount');
  var interestRate = document.getElementById('interestRate');
  var loanTerm = document.getElementById('loanTerm');
  var calculateLoanBtn = document.getElementById('calculateLoanBtn');
  var loanResult = document.getElementById('loanResult');
  
  calculateLoanBtn.addEventListener('click', function() {
    var principal = parseFloat(loanAmount.value);
    var rate = parseFloat(interestRate.value) / 100 / 12;
    var term = parseFloat(loanTerm.value) * 12;
  
    if (!isNaN(principal) && !isNaN(rate) && !isNaN(term)) {
      var monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -term));
      loanResult.textContent = 'Monthly Payment: $' + monthlyPayment.toFixed(2);
    } else {
      loanResult.textContent = 'Please enter valid values.';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Random Quote Generator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Quote Generator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Random Quote Generator</h1>
    <button id="generateQuoteBtn">Get a Random Quote</button>
    <p id="quoteDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Random Quote Generator Styles */
  button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.5em;
    color: #333;
  }
  
      `,
      js: `// Random Quote Generator using arrays
  var quotes = [
    'The only limit to our realization of tomorrow is our doubts of today.',
    'The purpose of our lives is to be happy.',
    'Life is what happens when you’re busy making other plans.',
    'Get busy living or get busy dying.',
    'You have within you right now, everything you need to deal with whatever the world can throw at you.'
  ];
  
  var generateQuoteBtn = document.getElementById('generateQuoteBtn');
  var quoteDisplay = document.getElementById('quoteDisplay');
  
  generateQuoteBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- To-Do List HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Enter a new task">
    <button id="addTaskBtn">Add Task</button>
    <ul id="taskList"></ul>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* To-Do List Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
  }
  
  li {
    margin: 10px 0;
  }
  
      `,
      js: `// To-Do list using arrays and DOM manipulation
  var taskInput = document.getElementById('taskInput');
  var addTaskBtn = document.getElementById('addTaskBtn');
  var taskList = document.getElementById('taskList');
  
  addTaskBtn.addEventListener('click', function() {
    var task = taskInput.value;
    if (task) {
      var newTask = document.createElement('li');
      newTask.textContent = task;
      taskList.appendChild(newTask);
      taskInput.value = ''; // Clear input field after adding the task
    }
  });
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Stopwatch HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Stopwatch</h1>
    <p id="timerDisplay">0:00</p>
    <button id="startBtn">Start</button>
    <button id="stopBtn">Stop</button>
    <button id="resetBtn">Reset</button>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Stopwatch Styles */
  button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 2em;
    font-weight: bold;
  }
  
      `,
      js: `// Stopwatch using timers and intervals
  var timerDisplay = document.getElementById('timerDisplay');
  var startBtn = document.getElementById('startBtn');
  var stopBtn = document.getElementById('stopBtn');
  var resetBtn = document.getElementById('resetBtn');
  
  var seconds = 0;
  var interval;
  
  function updateDisplay() {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    timerDisplay.textContent = minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
  }
  
  startBtn.addEventListener('click', function() {
    interval = setInterval(function() {
      seconds++;
      updateDisplay();
    }, 1000);
  });
  
  stopBtn.addEventListener('click', function() {
    clearInterval(interval);
  });
  
  resetBtn.addEventListener('click', function() {
    clearInterval(interval);
    seconds = 0;
    updateDisplay();
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Temperature Converter HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Converter</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Temperature Converter</h1>
    <input type="number" id="celsiusInput" placeholder="Celsius">
    <button id="convertBtn">Convert to Fahrenheit</button>
    <p id="conversionResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Temperature Converter Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Temperature converter from Celsius to Fahrenheit
  var celsiusInput = document.getElementById('celsiusInput');
  var convertBtn = document.getElementById('convertBtn');
  var conversionResult = document.getElementById('conversionResult');
  
  convertBtn.addEventListener('click', function() {
    var celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
      var fahrenheit = (celsius * 9/5) + 32;
      conversionResult.textContent = celsius + '°C is ' + fahrenheit.toFixed(2) + '°F';
    } else {
      conversionResult.textContent = 'Please enter a valid number';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Countdown Timer HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Timer</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Countdown Timer</h1>
    <input type="number" id="timerInput" placeholder="Enter seconds">
    <button id="startTimerBtn">Start Countdown</button>
    <p id="countdownDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Countdown Timer Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 2em;
    color: #333;
  }
  
      `,
      js: `// Simple countdown timer using setInterval
  var timerInput = document.getElementById('timerInput');
  var startTimerBtn = document.getElementById('startTimerBtn');
  var countdownDisplay = document.getElementById('countdownDisplay');
  
  startTimerBtn.addEventListener('click', function() {
    var seconds = parseInt(timerInput.value);
    if (!isNaN(seconds)) {
      countdownDisplay.textContent = seconds;
      var countdown = setInterval(function() {
        seconds--;
        countdownDisplay.textContent = seconds;
        if (seconds <= 0) {
          clearInterval(countdown);
          countdownDisplay.textContent = 'Time is up!';
        }
      }, 1000);
    } else {
      countdownDisplay.textContent = 'Please enter a valid number';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- BMI Calculator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>BMI Calculator</h1>
    <input type="number" id="weightInput" placeholder="Enter weight (kg)">
    <input type="number" id="heightInput" placeholder="Enter height (m)">
    <button id="calculateBMIBtn">Calculate BMI</button>
    <p id="bmiResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* BMI Calculator Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// BMI calculator using math calculations
  var weightInput = document.getElementById('weightInput');
  var heightInput = document.getElementById('heightInput');
  var calculateBMIBtn = document.getElementById('calculateBMIBtn');
  var bmiResult = document.getElementById('bmiResult');
  
  calculateBMIBtn.addEventListener('click', function() {
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    if (!isNaN(weight) && !isNaN(height)) {
      var bmi = weight / (height * height);
      bmiResult.textContent = 'Your BMI is: ' + bmi.toFixed(2);
    } else {
      bmiResult.textContent = 'Please enter valid values for weight and height.';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Currency Converter HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Currency Converter</h1>
    <input type="number" id="usdInput" placeholder="Enter amount in USD">
    <button id="convertToEurBtn">Convert to EUR</button>
    <p id="conversionResult"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Currency Converter Styles */
  input, button {
    margin: 10px;
    padding: 10px;
  }
  
  p {
    font-size: 1.2em;
  }
  
      `,
      js: `// Currency converter from USD to EUR using fixed conversion rate (no API)
  var usdInput = document.getElementById('usdInput');
  var convertToEurBtn = document.getElementById('convertToEurBtn');
  var conversionResult = document.getElementById('conversionResult');
  
  // Simulating a conversion rate of 1 USD = 0.85 EUR
  convertToEurBtn.addEventListener('click', function() {
    var usd = parseFloat(usdInput.value);
    if (!isNaN(usd)) {
      var eur = usd * 0.85;
      conversionResult.textContent = usd + ' USD is ' + eur.toFixed(2) + ' EUR';
    } else {
      conversionResult.textContent = 'Please enter a valid number';
    }
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Fortune Cookie HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fortune Cookie</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Fortune Cookie</h1>
    <button id="getFortuneBtn">Get My Fortune</button>
    <p id="fortuneDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Fortune Cookie Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: gold;
    border: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 1.5em;
    color: darkorange;
  }
  
      `,
      js: `// Fortune cookie using random selection
  var fortunes = [
    "You will soon find a surprise in an unexpected place.",
    "Your future is bright... but don't forget your sunglasses!",
    "A new adventure is around the corner. Pack your bags!",
    "The fortune you seek is in another cookie.",
    "You will meet someone special... but they might steal your fries."
  ];
  
  var getFortuneBtn = document.getElementById('getFortuneBtn');
  var fortuneDisplay = document.getElementById('fortuneDisplay');
  
  getFortuneBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneDisplay.textContent = fortunes[randomIndex];
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Compliment Generator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compliment Generator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Compliment Generator</h1>
    <button id="giveComplimentBtn">Give Me a Compliment</button>
    <p id="complimentDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Compliment Generator Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: lightblue;
    border: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 1.5em;
    color: hotpink;
  }
  
      `,
      js: `// Compliment generator using random selection
  var compliments = [
    "You're like a ray of sunshine on a rainy day!",
    "You bring out the best in others.",
    "You're as amazing as a unicorn on roller skates.",
    "Your smile is more refreshing than a cold lemonade on a hot day.",
    "You're like a human high-five!"
  ];
  
  var giveComplimentBtn = document.getElementById('giveComplimentBtn');
  var complimentDisplay = document.getElementById('complimentDisplay');
  
  giveComplimentBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * compliments.length);
    complimentDisplay.textContent = compliments[randomIndex];
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Joke Teller HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joke Teller</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Joke Teller</h1>
    <button id="tellJokeBtn">Tell Me a Joke</button>
    <p id="jokeDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Joke Teller Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: lightcoral;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 1.5em;
    color: darkblue;
  }
  
      `,
      js: `// Joke teller using random selection
  var jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you get when you cross a snowman with a vampire? Frostbite!"
  ];
  
  var tellJokeBtn = document.getElementById('tellJokeBtn');
  var jokeDisplay = document.getElementById('jokeDisplay');
  
  tellJokeBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * jokes.length);
    jokeDisplay.textContent = jokes[randomIndex];
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Cat Fact Generator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Fact Generator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Cat Fact Generator</h1>
    <button id="getCatFactBtn">Get a Cat Fact</button>
    <p id="catFactDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Cat Fact Generator Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: lightpink;
    border: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 1.5em;
    color: purple;
  }
  
      `,
      js: `// Cat fact generator simulating an API fetch
  var catFacts = [
    "Cats have five toes on their front paws, but only four on the back ones.",
    "A group of cats is called a clowder.",
    "Cats can rotate their ears 180 degrees.",
    "A cat's nose is as unique as a human's fingerprint.",
    "Cats sleep for around 70% of their lives."
  ];
  
  var getCatFactBtn = document.getElementById('getCatFactBtn');
  var catFactDisplay = document.getElementById('catFactDisplay');
  
  getCatFactBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * catFacts.length);
    catFactDisplay.textContent = catFacts[randomIndex];
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Random Dance Move HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Dance Move</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Random Dance Move</h1>
    <button id="getDanceMoveBtn">Show Me a Dance Move</button>
    <p id="danceMoveDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Random Dance Move Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: limegreen;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 1.5em;
    color: darkorange;
  }
  
      `,
      js: `// Random dance move generator using arrays
  var danceMoves = [
    "The Robot",
    "Moonwalk",
    "Floss",
    "Macarena",
    "Cha-Cha Slide"
  ];
  
  var getDanceMoveBtn = document.getElementById('getDanceMoveBtn');
  var danceMoveDisplay = document.getElementById('danceMoveDisplay');
  
  getDanceMoveBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * danceMoves.length);
    danceMoveDisplay.textContent = 'Try this move: ' + danceMoves[randomIndex] + '!';
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Motivation Generator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Motivation Generator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Motivation Generator</h1>
    <button id="getMotivationBtn">Get Motivated</button>
    <p id="motivationDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Motivation Generator Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: orange;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 1.5em;
    color: green;
  }
  
      `,
      js: `// Motivation generator using random quotes
  var motivations = [
    "You are capable of amazing things!",
    "Dream big and dare to fail.",
    "Believe in yourself and all that you are.",
    "You have the power to create change.",
    "The best time to plant a tree was 20 years ago. The second best time is now."
  ];
  
  var getMotivationBtn = document.getElementById('getMotivationBtn');
  var motivationDisplay = document.getElementById('motivationDisplay');
  
  getMotivationBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * motivations.length);
    motivationDisplay.textContent = motivations[randomIndex];
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Magic 8-Ball HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magic 8-Ball</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Magic 8-Ball</h1>
    <button id="askQuestionBtn">Ask the Magic 8-Ball</button>
    <p id="magicAnswerDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Magic 8-Ball Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: darkviolet;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 1.5em;
    color: indigo;
  }
  
      `,
      js: `// Magic 8-Ball using conditional statements
  var answers = [
    "Yes",
    "No",
    "Maybe",
    "Definitely",
    "I wouldn’t count on it"
  ];
  
  var askQuestionBtn = document.getElementById('askQuestionBtn');
  var magicAnswerDisplay = document.getElementById('magicAnswerDisplay');
  
  askQuestionBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * answers.length);
    magicAnswerDisplay.textContent = answers[randomIndex];
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Random Excuse Generator HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Excuse Generator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Random Excuse Generator</h1>
    <button id="getExcuseBtn">Give Me an Excuse</button>
    <p id="excuseDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Random Excuse Generator Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: mediumseagreen;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 1.5em;
    color: darkred;
  }
  
      `,
      js: `// Random excuse generator using arrays
  var excuses = [
    "I was abducted by aliens.",
    "My pet dragon ate my homework.",
    "I got stuck in a parallel universe.",
    "My internet connection is too strong.",
    "I was busy saving the world."
  ];
  
  var getExcuseBtn = document.getElementById('getExcuseBtn');
  var excuseDisplay = document.getElementById('excuseDisplay');
  
  getExcuseBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * excuses.length);
    excuseDisplay.textContent = excuses[randomIndex];
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Chuck Norris Fact HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chuck Norris Fact</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Chuck Norris Fact</h1>
    <button id="getChuckFactBtn">Get Chuck Norris Fact</button>
    <p id="chuckFactDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Chuck Norris Fact Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: crimson;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 1.5em;
    color: gold;
  }
  
      `,
      js: `// Chuck Norris fact generator using arrays
  var chuckNorrisFacts = [
    "Chuck Norris can divide by zero.",
    "Chuck Norris counted to infinity. Twice.",
    "Chuck Norris can unscramble an egg.",
    "When Chuck Norris enters a room, he doesn’t turn the lights on. He turns the dark off.",
    "Chuck Norris can do a wheelie on a unicycle."
  ];
  
  var getChuckFactBtn = document.getElementById('getChuckFactBtn');
  var chuckFactDisplay = document.getElementById('chuckFactDisplay');
  
  getChuckFactBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * chuckNorrisFacts.length);
    chuckFactDisplay.textContent = chuckNorrisFacts[randomIndex];
  });
  
      `
    }
     ,
    {
          
      html: `<!-- Basic HTML structure -->
  <!-- Emoji Reaction HTML -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Emoji Reaction</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Random Emoji Reaction</h1>
    <button id="getEmojiBtn">Show Me an Emoji</button>
    <p id="emojiDisplay"></p>
    <script src="script.js"></script>
  </body>
  </html>
  
      `,
      css: `/* Emoji Reaction Styles */
  button {
    margin: 10px;
    padding: 10px;
    background-color: yellow;
    border: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  
  p {
    font-size: 3em;
  }
  
      `,
      js: `// Random emoji reaction generator using arrays
  var emojis = [
    "😄",
    "😂",
    "🤔",
    "😎",
    "🤯"
  ];
  
  var getEmojiBtn = document.getElementById('getEmojiBtn');
  var emojiDisplay = document.getElementById('emojiDisplay');
  
  getEmojiBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * emojis.length);
    emojiDisplay.textContent = emojis[randomIndex];
  });
  
      `
    }
  /*     ,
    {
          
      html: `<!-- Basic HTML structure -->
  
      `,
      css: `
  
      `,
      js: `
  
      `
    }*/
        // Add more templates here as needed
  ];
  
  // Function to copy code
  function copyCode(id) {
    const textarea = document.getElementById(id);
    textarea.select();
    document.execCommand('copy');
    alert('Code copied!');
  }
  
  // Function to generate a random template
  document.getElementById('generateBtn').addEventListener('click', () => {
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    // Display HTML, CSS, and JS in respective boxes
    document.getElementById('htmlCode').value = randomTemplate.html;
    document.getElementById('cssCode').value = randomTemplate.css;
    document.getElementById('jsCode').value = randomTemplate.js;
  });
  