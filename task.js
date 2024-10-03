// Sample task data (similar to what you already have)
const tasks = {
    finland: {
        name: 'Finland',
        quests: [
          {
            title: 'Fix the Finnish Railway Ticket Booking System',
            description: 'The railway ticket booking system is almost complete, but there are some errors in the code that break its functionality. Can you spot and fix them? Use the comments as hints to help you debug.',
            html: `<div class="ticket-booking">
  <h1>Finnish Railway Ticket Booking</h1>

  <form id="ticket-form">
    <!-- Departure Station Selection -->
    <label for="departure">Departure Station:</label>
    <select id="departure" required>
      <option value="Helsinki">Helsinki</option>
      <option value="Tampere">Tampere</option>
      <option value="Turku">Turku</option>
      <option value="Rovaniemi">Rovaniemi</option>
    </select>

    <!-- Arrival Station Selection -->
    <label for="arrival">Arrival Station:</label>
    <select id="arrival" required>
      <option value="Helsinki">Helsinki</option>
      <option value="Tampere">Tampere</option>
      <option value="Turku">Turku</option>
      <option value="Rovaniemi">Rovaniemi</option>
    </select>

    <!-- Ticket Type Selection -->
    <label for="ticket-type">Ticket Type:</label>
    <select id="ticket-type" required>
      <option value="standard">Standard</option>
      <option value="first-class">First Class</option>
    </select>

    <!-- Discount Selection -->
    <label for="discount">Discount:</label>
    <select id="discount">
      <option value="none">None</option>
      <option value="student">Student</option>
      <option value="senior">Senior (65+)</option>
    </select>

    <!-- Calculate Button -->
    <button type="button" id="calculate">Calculate Total</button>
  </form>

  <!-- Display Total Price -->
  <div class="price-display">
    <p>Total Price: <span id="total-price">0€</span></p>
  </div>
</div>
`,
            css: `.ticket-booking {
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #006AA7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #004C6D;
}

.price-display {
  margin-top: 20px;
  font-size: 18px;
}
`,
            js: `document.getElementById('calculate').addEventListener('click', function() {
  const departure = document.getElementById('departure').value;
  const arrival = document.getElementById('arrival').value;
  const ticketType = document.getElementById('ticket-type').value;
  const discount = document.getElementById('discount').value;

  let route = departure + '-' + arrival;
  if (departure === arrival) {
    alert('Departure and Arrival stations must be different!');
    return;
  }

  // Base prices for different routes (in EUR)
  const priceMap = {
    "Helsinki-Tampere": 20,
    "Helsinki-Turku": 25,
    "Helsinki-Rovaniemi": 50,
    "Tampere-Turku": 15,
    "Tampere-Rovaniemi": 40,
    "Turku-Rovaniemi": 45
  };

  let basePrice = priceMap[route] || priceMap[arrival + '-' + departure];

  // Issue #1: Missing condition for the first-class ticket
  // Problem: First class price is not being added properly.
  // Hint: Check if the code logic for adding first-class pricing is being triggered.
  if (ticketType = 'first-class') {
    basePrice += 10; // First class adds 10€ to the price
  }

  // Issue #2: Incorrect discount calculations
  // Problem: Discount is not being applied to the ticket prices.
  // Hint: Check the multiplication operator and ensure discount is applied properly.
  if (discount == 'student') {
    basePrice *= 0.2; // 20% discount for students
  } else if (discount == 'senior') {
    basePrice *= 0.3; // 30% discount for seniors
  }

  document.getElementById('total-price').textContent =  basePrice.toFixed(2) + '€';
});
`
          }
        ]
        
        


    },
    sweden: {
        name: 'Sweden',
        quests: [
          {
            "title": "Fix the Swedish Meatball Recipe Calculator",
            "description": "This recipe calculator for Swedish Meatballs has some issues that prevent it from giving the correct ingredients for different servings. Can you fix the code? Use the comments as hints to help you debug. Learn more about Swedish cuisine along the way!",
            "html": `<div class="recipe-calculator">
  <h1>Swedish Meatball Recipe Calculator</h1>
  <p>Swedish meatballs (Köttbullar) are a popular traditional dish in Sweden. Adjust the number of servings, and the calculator will give you the right amount of ingredients!</p>

  <form id="recipe-form">
    <!-- Input for servings -->
    <label for="servings">Number of Servings:</label>
    <input type="number" id="servings" value="4" min="1" required>

    <!-- Ingredients List (dynamic based on servings) -->
    <div id="ingredients">
      <h2>Ingredients:</h2>
      <ul>
        <li>400g ground beef</li>
        <li>1 egg</li>
        <li>100ml milk</li>
        <li>50g breadcrumbs</li>
        <li>Salt, pepper to taste</li>
      </ul>
    </div>

    <!-- Button to calculate ingredients -->
    <button type="button" id="calculate">Calculate Ingredients</button>
  </form>
</div>
            `,
            "css": `.recipe-calculator {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #006AA7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #004C6D;
}

#ingredients {
  margin-top: 20px;
  font-size: 18px;
  text-align: left;
}
            `,
            "js": `document.getElementById('calculate').addEventListener('click', function() {
  const servings = document.getElementById('servings').value;

  // Issue #1: Conversion error
  // Problem: The calculations aren't correct because the base values for ingredients are not properly set.
  // Hint: Double-check if the base ingredient values are assigned properly.
  let baseIngredients = {
    beef: 0, // 400g ground beef for 4 servings
    egg: 0,    // 1 egg
    milk: 0, // 100ml milk
    breadcrumbs: 0 // 50g breadcrumbs
  };

  // Issue #2: Logic error in serving calculation
  // Problem: The number of servings isn't being considered correctly in the calculation.
  // Hint: Make sure you multiply the ingredients correctly based on the number of servings.
  let multiplier = servings / 2;

  let beef = baseIngredients.beef * multiplier; 
  let egg = baseIngredients.egg * multiplier; 
  let milk = baseIngredients.milk * multiplier; 
  let breadcrumbs = baseIngredients.breadcrumbs * multiplier;

  document.getElementById('ingredients').innerHTML = \`
    <h2>Ingredients for \${servings} servings:</h2>
    <ul>
      <li>\${beef}g ground beef</li>
      <li>\${Math.ceil(egg)} egg(s)</li> <!-- Rounding eggs since we can't have a fraction of an egg -->
      <li>\${milk}ml milk</li>
      <li>\${breadcrumbs}g breadcrumbs</li>
      <li>Salt, pepper to taste</li>
    </ul>
  \`;

  // Bonus Fact: Display an interesting fact about Swedish meatballs
  alert("Did you know? Swedish meatballs became famous worldwide after being introduced by IKEA in the 1980s!");
});
            `
          }
        ]        
      },
      norway: {
        name: 'Norway',
        quests: [
          {
            title: 'Build a Local Cafe Website',
            description: 'Create a mobile-friendly cafe website with a minimalistic design, popular in Norway. Ensure the navigation, content, and payment features work correctly.',
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nordic Cafe</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Navigation Bar -->
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- Main Content -->
    <main>
      <!-- Home Section -->
      <section id="home">
        <h1>Welcome to Nordic Cafe</h1>
        <p>Enjoy the best coffee in the heart of Norway.</p>
      </section>

      <!-- Menu Section -->
      <section id="menu">
        <h2>Our Menu</h2>
        <div class="menu-item">
          <h3>Cappuccino</h3>
          <p>Price: 40 NOK</p>
        </div>
        <div class="menu-item">
          <h3>Latte</h3>
          <p>Price: 45 NOK</p>
        </div>
        <div class="menu-item">
          <h3>Espresso</h3>
          <p>Price: 30 NOK</p>
        </div>
        <!-- TODO: Add more items to the menu -->
      </section>

      <!-- Currency Converter -->
      <section id="converter">
        <h2>Currency Converter</h2>
        <label for="amount">Amount in NOK:</label>
        <input type="number" id="amount" placeholder="Enter NOK amount">
        <button id="convert-btn">Convert to USD</button>
        <p id="converted-amount">Amount in USD: </p>
      </section>

      <!-- About Us Section -->
      <section id="about">
        <h2>About Us</h2>
        <p>Nordic Cafe is a family-run cafe offering the best coffee experience in Oslo.</p>
      </section>
    </main>

    <!-- Footer -->
    <footer>
      <p>Contact us at: info@nordiccafe.no | Phone: +47 123 456 789</p>
    </footer>

    <script src="scripts.js"></script>
  </body>
  </html>
`,
            css: `/* Mobile-First Approach */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

nav {
  background-color: #333;
  color: white;
  padding: 1em;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5em;
}

main {
  padding: 1em;
}

h1, h2, h3 {
  color: #333;
}

.menu-item {
  border-bottom: 1px solid #ddd;
  padding: 0.5em 0;
}

/* Responsive Styles */
@media (min-width: 768px) {
  nav ul {
    justify-content: flex-start;
  }
  nav a {
    margin-right: 2em;
  }
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em;
  position: relative;
  bottom: 0;
  width: 100%;
}
`,
            js: `// Currency Converter Logic
document.getElementById('convert-btn').addEventListener('click', function() {
  const amount = document.getElementById('amount').value;
  const rate = 0.11; // 1 NOK = 0.11 USD (example rate)

  document.getElementById('converted-amount').innerText = "Amount in USD: " + (amount * rate).toFixed(2);
});

// TODO: Add more JS functionality, e.g., a payment gateway option for Norwegian customers.
`
          }
        ]
      
      },
      china: {
        name: 'China',
        quests: [
          {
            title: 'Create a Chinese Local E-Commerce Website',
            description: 'Design an e-commerce website with a product gallery and Chinese payment methods like WeChat Pay and Alipay. Make it mobile-friendly and interactive.',
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>China Market</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navigation Bar -->
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#payment">Payment Methods</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  </nav>

  <!-- Main Content -->
  <main>
    <!-- Home Section -->
    <section id="home">
      <h1>Welcome to China Market</h1>
      <p>Buy authentic products with fast shipping across China.</p>
    </section>

    <!-- Products Section -->
    <section id="products">
      <h2>Our Products</h2>
      <div class="product-item">
        <h3>Smartphone</h3>
        <p>Price: ¥5000</p>
        <button class="buy-btn">Buy Now</button>
      </div>
      <div class="product-item">
        <h3>Laptop</h3>
        <p>Price: ¥8000</p>
        <button class="buy-btn">Buy Now</button>
      </div>
      <div class="product-item">
        <h3>Wireless Headphones</h3>
        <p>Price: ¥1200</p>
        <button class="buy-btn">Buy Now</button>
      </div>
      <!-- TODO: Add more products dynamically using JS -->
    </section>

    <!-- Payment Methods Section -->
    <section id="payment">
      <h2>Payment Methods</h2>
      <p>Select your preferred payment option:</p>
      <ul>
        <li>WeChat Pay</li>
        <li>Alipay</li>
        <!-- TODO: Add form for payment selection and handling -->
      </ul>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <p>Contact us: support@chinamarket.cn | Phone: +86 123 4567 890</p>
  </footer>

  <script src="scripts.js"></script>
</body>
</html>
`,
            css: `/* Mobile-First Styles */
body {
  font-family: 'Noto Sans SC', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

nav {
  background-color: #ff5722;
  color: white;
  padding: 1em;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
}

main {
  padding: 1em;
}

h1, h2, h3 {
  color: #333;
}

.product-item {
  background-color: white;
  margin: 1em 0;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.buy-btn {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
}

/* Responsive Styles */
@media (min-width: 768px) {
  nav ul {
    justify-content: flex-start;
  }
  nav a {
    margin-right: 2em;
  }
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em;
}
`,
            js: `// Basic functionality for "Buy Now" buttons
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your purchase! Payment methods are available in the next section.');
  });
});

// TODO: Add JS logic for handling payments dynamically.
// HINT: Create a form with WeChat Pay and Alipay payment options. 
// Make sure to trigger the form when the user clicks a product to "buy".

// Add logic for dynamically updating the product list using JS instead of hardcoded HTML.
// For example, you can store product data in an array and loop through it to display all products.
`
          }
        ]
      },
      usa: {
        name: 'USA',
        quests: [
          {
            title: 'Coffee Shop Website: Bean and Gone',
            description: 'Build a website for a local coffee shop with a humorous touch and interactive features.',
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bean and Gone - Local Coffee Shop</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation Bar -->
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- Main Content -->
    <main>
        <section id="home">
            <h1>Welcome to Bean and Gone</h1>
            <p>Where the coffee is strong, and so are our Wi-Fi passwords!</p>
            <!-- Coffee of the Day App -->
            <div id="coffee-of-the-day">
                <h2>What's the Coffee of the Day?</h2>
                <button id="reveal-coffee">Reveal</button>
                <p id="coffee-message"></p>
            </div>
        </section>

        <section id="menu">
            <h2>Our Menu</h2>
            <ul>
                <li>Espresso - $3</li>
                <li>Latte - $4</li>
                <li>Cappuccino - $4.5</li>
                <li>Americano - $3.5</li>
                <!-- TASK: Add one more item to the menu with price -->
            </ul>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>Bean and Gone was founded in 2020 with the mission to serve the best coffee and the worst jokes. It's true - we grind both daily!</p>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <p>Got a joke to share or need coffee advice? Email us at <a href="mailto:coffee@beanandgone.com">coffee@beanandgone.com</a></p>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <p>Store Hours: Mon-Fri 7am-6pm | Sat-Sun 8am-4pm</p>
        <p>&copy; 2024 Bean and Gone | Follow us on <a href="#">Instagram</a> and <a href="#">Twitter</a></p>
    </footer>

    <script src="app.js"></script>
</body>
</html>
`,
            css: `/* Basic Styling */
body {
    font-family: 'Arial', sans-serif; /* A font commonly used in the USA */
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

nav {
    background-color: #4B2A1E; /* Coffee-colored navbar */
    padding: 1rem;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
}

nav ul li {
    margin: 0 10px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

/* Main Content Styling */
main {
    padding: 20px;
    max-width: 1200px;
    margin: auto;
}

h1, h2 {
    color: #4B2A1E;
}

#coffee-of-the-day {
    background-color: #e0d8cc;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
    }
}

footer {
    background-color: #4B2A1E;
    color: white;
    text-align: center;
    padding: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
}
`,
            js: `// JavaScript for Coffee of the Day and humor
document.getElementById('reveal-coffee').addEventListener('click', function() {
    const coffees = [
        'Espresso - Strong and Bold!',
        'Latte - Smooth and Steamy!',
        'Cappuccino - Frothy Fun!',
        'Americano - Not Just for Patriots!'
    ];

    const jokes = [
        'Why did the coffee file a police report? It got mugged!',
        'What’s a coffee’s favorite movie? A Mug-nificent Seven!',
        'How does Moses make coffee? Hebrews it!',
        'Why do coffee beans never gossip? They know how to keep it grounded!'
    ];

    // Random Coffee of the Day
    const randomCoffee = coffees[Math.floor(Math.random() * coffees.length)];

    // Random Joke
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Display both coffee and joke
    document.getElementById('coffee-message').innerHTML = \`\${randomCoffee}<br><strong>Joke of the day:</strong> \${randomJoke}\`;
});

// TASK: The Coffee button doesn't show anything! What’s wrong? HINT: Look for the missing connection in the script.
`
          },
          {
            title: 'Catch the Falling Stars',
    description: 'In this game, you have to catch the falling stars in your basket. The more stars you catch, the higher your score! Use your mouse to move the basket left and right.',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catch the Falling Stars</title>
  <link rel="stylesheet" href="styles.css">
  <script defer src="script.js"></script>
</head>
<body>
  <h1>Catch the Falling Stars!</h1>
  <div id="gameArea">
    <div id="basket"></div>
  </div>
  <div id="scoreBoard">Score: <span id="score">0</span></div>
  <button id="startButton">Start Game</button>
  <div id="gameOver" style="display:none;">Game Over! Your score is: <span id="finalScore"></span></div>
</body>
</html>
`,
    css: `body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #222;
  color: white;
}

#gameArea {
  position: relative;
  width: 400px;
  height: 600px;
  border: 2px solid #fff;
  margin: 20px auto;
  overflow: hidden;
}

#basket {
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 80px;
  height: 20px;
  background-color: #0af;
  transform: translateX(-50%);
}

.star {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: yellow;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

#scoreBoard {
  margin: 20px;
  font-size: 24px;
}

#gameOver {
  font-size: 28px;
  color: red;
}
`,
    js: `let score = 0;
let isGameRunning = false;
let starInterval;

const basket = document.getElementById('basket');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');
const gameOverDisplay = document.getElementById('gameOver');
const finalScoreDisplay = document.getElementById('finalScore');
const gameArea = document.getElementById('gameArea');

function startGame() {
  score = 0;
  isGameRunning = true;
  scoreDisplay.innerText = score;
  gameOverDisplay.style.display = 'none';
  moveBasket();

  // Start spawning stars every second
  starInterval = setInterval(() => {
    spawnStar();
  }, 1000);
}

function moveBasket() {
  document.addEventListener('mousemove', (event) => {
    const rect = gameArea.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    if (mouseX >= 0 && mouseX <= rect.width) {
      basket.style.left = mouseX - 40 + 'px'; // 40 is half the basket's width
    }
  });
}

function spawnStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  const starPosition = Math.random() * (gameArea.clientWidth - 20);
  star.style.left = starPosition + 'px';
  star.style.top = '0px';
  gameArea.appendChild(star);
  fallStar(star);
}

function fallStar(star) {
  let fallingInterval = setInterval(() => {
    const starTop = parseInt(star.style.top) || 0;
    if (starTop >= gameArea.clientHeight - 20) {
      clearInterval(fallingInterval);
      endGame();
      star.remove(); // Remove the star when it reaches the bottom
    } else {
      star.style.top = starTop + 5 + 'px'; // Move the star down
    }

    // Check for catch
    if (isCaught(star)) {
      score++;
      scoreDisplay.innerText = score;
      star.remove(); // Remove the star when caught
      clearInterval(fallingInterval);
    }
  }, 50);
}

function isCaught(star) {
  const basketRect = basket.getBoundingClientRect();
  const starRect = star.getBoundingClientRect();

  return (
    starRect.bottom >= basketRect.top &&
    starRect.top <= basketRect.bottom &&
    starRect.right >= basketRect.left &&
    starRect.left <= basketRect.right
  );
}

function endGame() {
  clearInterval(starInterval);
  isGameRunning = false;
  gameOverDisplay.style.display = 'block';
  finalScoreDisplay.innerText = score;
}

startButton.addEventListener('click', startGame);
    `

          },        ]
        
      },
      russia: {
        name: 'Russia',
        quests: [
          {
            title: 'Russian Landmarks Page',
            description: 'Create a simple webpage that introduces famous landmarks in Russia. Style the page to make it visually appealing and interactive.',
            html: `<div class="container">
  <header class="header">
    <h1>Famous Russian Landmarks</h1>
  </header>
  <main class="main-content">
    <section>
      <h2>Moscow Kremlin</h2>
      <img src="kremlin.jpg" alt="Kremlin" class="landmark-image">
      <p>The Moscow Kremlin is a historic fortified complex in the heart of Moscow.</p>
    </section>
    <section>
      <h2>St. Basil's Cathedral</h2>
      <img src="st-basil.jpg" alt="St. Basil's Cathedral" class="landmark-image">
      <p>Known for its colorful onion domes, St. Basil's Cathedral is a symbol of Russia's unique architecture.</p>
    </section>
    <button id="learnMore">Learn More</button>
  </main>
  <footer class="footer">
    <p>Russia Landmarks © 2024</p>
  </footer>
</div>
            `,
            css: `/* General Page Styling */
body {
  font-family: 'Arial, sans-serif';
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  background-color: #d32f2f;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.header h1 {
  font-size: 2.5em;
  margin: 0;
}

.main-content {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.main-content h2 {
  color: #d32f2f;
}

.landmark-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
}

.footer {
  text-align: center;
  padding: 10px;
  background-color: #d32f2f;
  color: #fff;
}

button {
  background-color: #d32f2f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #b71c1c;
}
            `,
            js: `
// JavaScript functionality to show more information about Russian landmarks
document.getElementById('learnMore').addEventListener('click', function() {
  alert('Russia is home to many beautiful landmarks including the Moscow Kremlin and St. Basil\'s Cathedral.');
});
            `
          },
          {
            title: 'Russian History Quiz',
            description: 'Create a quiz page to test users on their knowledge of Russian history. Use HTML for the structure, CSS for styling, and JavaScript for quiz functionality.',
            html: `<div class="quiz-container">
  <header class="quiz-header">
    <h1>Test Your Russian History Knowledge</h1>
  </header>
  <main class="quiz-content">
    <form id="historyQuiz">
      <div class="quiz-question">
        <h3>Who was the first Tsar of Russia?</h3>
        <input type="radio" name="question1" value="Ivan IV"> Ivan IV<br>
        <input type="radio" name="question1" value="Peter I"> Peter I<br>
        <input type="radio" name="question1" value="Nicholas II"> Nicholas II<br>
      </div>
      <div class="quiz-question">
        <h3>When did the Russian Revolution take place?</h3>
        <input type="radio" name="question2" value="1905"> 1905<br>
        <input type="radio" name="question2" value="1917"> 1917<br>
        <input type="radio" name="question2" value="1945"> 1945<br>
      </div>
      <button type="submit">Submit Quiz</button>
    </form>
    <div id="quizResult"></div>
  </main>
</div>
            `,
            css: `/* Quiz Page Styling */
.quiz-container {
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.quiz-header {
  text-align: center;
  margin-bottom: 20px;
}

.quiz-question {
  margin-bottom: 20px;
}

button {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #b71c1c;
}
            `,
            js: `// JavaScript functionality to handle quiz submission and calculate result
document.getElementById('historyQuiz').addEventListener('submit', function(event) {
  event.preventDefault();
  let score = 0;
  
  // Check answers
  if (document.querySelector('input[name="question1"]:checked').value === "Ivan IV") {
    score++;
  }
  if (document.querySelector('input[name="question2"]:checked').value === "1917") {
    score++;
  }

  // Show result
  document.getElementById('quizResult').innerHTML = 'Your score: ' + score + '/2';
});
            `
          },
          {
            title: 'Create a Russian Flag',
            description: 'Use HTML and CSS to create a simple representation of the Russian flag. No images allowed, only pure CSS for styling.',
            html: `<div class="flag-container">
  <div class="flag white"></div>
  <div class="flag blue"></div>
  <div class="flag red"></div>
</div>
            `,
            css: `/* Russian Flag Representation */
.flag-container {
  width: 300px;
  border: 2px solid black;
}

.flag {
  height: 100px;
  width: 100%;
}

.white {
  background-color: white;
}

.blue {
  background-color: blue;
}

.red {
  background-color: red;
}
            `,
            js: `
// No JavaScript functionality is needed for this task.
            `
          }
        ]        
      },
      india: {
        name: 'India',
        
      }
    
    // Add more countries and tasks here...
};

// Function to get query parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        country: params.get('country'),
        task: parseInt(params.get('task'))
    };
}

// On page load, populate the task data
document.addEventListener('DOMContentLoaded', () => {
    const { country, task } = getQueryParams();

    if (tasks[country] && tasks[country].quests[task]) {
        const selectedTask = tasks[country].quests[task];

        // Set up initial values
        document.getElementById('task-title').textContent = selectedTask.title;
        document.getElementById('task-description').textContent = selectedTask.description;

        const htmlEditor = document.getElementById('html-editor');
        const cssEditor = document.getElementById('css-editor');
        const jsEditor = document.getElementById('js-editor');
        const iframe = document.getElementById('preview-frame');

        // Load initial task code
        htmlEditor.value = selectedTask.html;
        cssEditor.value = selectedTask.css;
        jsEditor.value = selectedTask.js;

        // Function to run the code inside the iframe
        function runCode() {
            const html = htmlEditor.value;
            const css = `<style>${cssEditor.value}</style>`;
            const js = `<script>${jsEditor.value}</script>`;

            const previewContent = `
                ${html}
                ${css}
                ${js}
            `;

            // Inject the combined HTML, CSS, and JS into the iframe
            iframe.srcdoc = previewContent;
        }

        // Function to reset the code to the initial values
        function resetCode() {
            htmlEditor.value = selectedTask.html;
            cssEditor.value = selectedTask.css;
            jsEditor.value = selectedTask.js;
            runCode();  // Run the original code after resetting
        }

        // Add event listeners for the buttons
        document.getElementById('run-code').addEventListener('click', runCode);
        document.getElementById('reset-code').addEventListener('click', resetCode);

        // Run the initial code on load
        runCode();
    } else {
        alert('Task not found!');
    }
});

//Mobile Preview button toggle functionality
document.getElementById('mobile-preview').addEventListener('click', function() {
  if(document.getElementById('mobile-preview').innerHTML == 'Mobile Preview'){
    document.getElementById('preview-frame').style.width = '375px';
    document.getElementById('mobile-preview').innerHTML = 'Desktop Preview';
} else {
  document.getElementById('preview-frame').style.width = '100%';
  document.getElementById('mobile-preview').innerHTML = 'Mobile Preview';
}
});

//Hide and show editors in mobile mode
document.getElementById('html-edit').addEventListener('click', function() {
  if(document.getElementById('html-edit').innerHTML == 'Hide'){
    document.getElementById('html-editor').style.display = 'none';
    document.getElementById('html-edit').innerHTML = 'Show';
  } else {
    document.getElementById('html-editor').style.display = 'block';
    document.getElementById('html-edit').innerHTML = 'Hide';
  }
});

document.getElementById('css-edit').addEventListener('click', function() {
  if(document.getElementById('css-edit').innerHTML == 'Hide'){
    document.getElementById('css-editor').style.display = 'none';
    document.getElementById('css-edit').innerHTML = 'Show';
  } else {
    document.getElementById('css-editor').style.display = 'block';
    document.getElementById('css-edit').innerHTML = 'Hide';
  }
});

document.getElementById('js-edit').addEventListener('click', function() {
  if(document.getElementById('js-edit').innerHTML == 'Hide'){
    document.getElementById('js-editor').style.display = 'none';
    document.getElementById('js-edit').innerHTML = 'Show';
  } else {
    document.getElementById('js-editor').style.display = 'block';
    document.getElementById('js-edit').innerHTML = 'Hide';
  }
});