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
            const js = `<script>${jsEditor.value}<\/script>`;

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
