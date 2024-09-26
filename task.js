// Sample task data (similar to what you already have)
const tasks = {
    finland: {
        name: 'Finland',
        quests: [
  {
    title: 'Fix the layout for a Finnish sauna booking website',
    description: 'The layout is broken due to a small mistake. Fix the typo in the CSS to make the sauna booking page look nice.',
    html: `<div class="sauna-booking">
              <h1>Book a Sauna Experience</h1>
              <img src="sauna.jpg" alt="Sauna Image">
              <p>Relax in a Finnish sauna. Book now!</p>
           </div>`,
    css: `.souna-booking { /* Typo here! Should be "sauna-booking" */
             width: 90%;
             margin: auto;
             text-align: center;
           }`,
    js: `// No JS needed for this task`
  },
  {
    title: 'Fix the image gallery for Northern Lights photos',
    description: 'The images are not showing correctly. There is a mistake in the CSS. Can you spot and fix it?',
    html: `<div class="gallery">
             <img src="northern-lights1.jpg" alt="Northern Lights 1">
             <img src="northern-lights2.jpg" alt="Northern Lights 2">
             <img src="northern-lights3.jpg" alt="Northern Lights 3">
           </div>`,
    css: `.galery { /* Typo here! Should be "gallery" */
             display: grid;
             grid-template-columns: repeat(3, 1fr);
             gap: 10px;
           }`,
    js: `// No JS needed for this task`
  },
  {
    title: 'Fix the language switcher on the Finnish website',
    description: 'The language switcher isn’t working because of a small typo in the JavaScript code. Can you find it?',
    html: `<select id="language-switcher">
              <option value="en">English</option>
              <option value="fi">Finnish</option>
              <option value="sv">Swedish</option>
           </select>
           <p id="message">Welcome to the website!</p>`,
    css: `#language-switcher {
             margin: 10px;
             padding: 5px;
           }`,
    js: `document.getElemntById('language-switcher') /* Typo here! Should be "getElementById" */
           .addEventListener('change', (e) => {
             const message = document.getElementById('message');
             if (e.target.value === 'fi') {
               message.textContent = 'Tervetuloa sivustolle!';
             } else if (e.target.value === 'sv') {
               message.textContent = 'Välkommen till webbplatsen!';
             } else {
               message.textContent = 'Welcome to the website!';
             }
           });`
  },
  {
    title: 'Fix the login form for a Finnish game website',
    description: 'There is a mistake in the CSS causing the button to look weird. Can you fix it?',
    html: `<form id="login-form">
             <label for="username">Username:</label>
             <input type="text" id="username" required>
             <label for="password">Password:</label>
             <input type="password" id="password" required>
             <button type="submit">Login</button>
           </form>`,
    css: `#login-form button {
             pdding: 10px; /* Typo here! Should be "padding" */
             background-color: #007ACC;
             color: white;
             border: none;
           }`,
    js: `// No JS needed for this task`
  },
  {
    title: 'Fix the hover effect on the Finnish food blog',
    description: 'The hover effect on the food images isn’t working because of a small typo in the CSS. Can you fix it?',
    html: `<div class="food-gallery">
             <img src="karjalanpiirakka.jpg" alt="Karelian pasty">
             <img src="lohikeitto.jpg" alt="Salmon soup">
           </div>`,
    css: `.food-galery img { /* Typo here! Should be "food-gallery" */
             width: 200px;
             transition: tranform 0.3s ease; /* Typo here! Should be "transform" */
           }
           .food-gallery img:hover {
             transform: scale(1.1);
           }`,
    js: `// No JS needed for this task`
  },
  {
    title: 'Fix the weather widget for a Finland travel blog',
    description: 'The weather widget isn’t showing the temperature because of a small typo in the JavaScript code. Can you fix it?',
    html: `<div id="weather-widget">
             <h2>Current Weather in Helsinki</h2>
             <p id="temperature"></p>
           </div>`,
    css: `#weather-widget {
             background-color: #f0f0f0;
             padding: 20px;
             text-align: center;
             border-radius: 10px;
           }`,
    js: `fetch('https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=YOUR_API_KEY')
           .then(response => response.json())
           .then(data => {
             const temp = data.main.tempe - 273.15; /* Typo here! Should be "temp" */
             document.getElementById('temperature').textContent = \`\${temp.toFixed(1)}°C\`;
           });`
  }
]


    },
    sweden: {
        name: 'Sweden',
        quests: [
          {
            title: 'Build a Basic Calculator',
            description: 'Complete the JavaScript code to make the calculator functional. It should handle addition, subtraction, multiplication, and division operations.',
            html: `
<div class="calculator">
  <input type="text" id="calc-display" placeholder="0" readonly>

  <div class="buttons">
    <button class="btn num" data-num="7">7</button>
    <button class="btn num" data-num="8">8</button>
    <button class="btn num" data-num="9">9</button>
    <button class="btn operator" data-operator="/">÷</button>

    <button class="btn num" data-num="4">4</button>
    <button class="btn num" data-num="5">5</button>
    <button class="btn num" data-num="6">6</button>
    <button class="btn operator" data-operator="*">×</button>

    <button class="btn num" data-num="1">1</button>
    <button class="btn num" data-num="2">2</button>
    <button class="btn num" data-num="3">3</button>
    <button class="btn operator" data-operator="-">-</button>

    <button class="btn num" data-num="0">0</button>
    <button class="btn" id="clear">C</button>
    <button class="btn operator" data-operator="+">+</button>
    <button class="btn" id="equals">=</button>
  </div>
</div>
`,
            css: `
              .calculator {
                width: 250px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 10px;
                text-align: center;
                background-color: #f0f0f0;
              }
        
              #calc-display {
                width: 100%;
                font-size: 24px;
                padding: 10px;
                text-align: right;
                margin-bottom: 10px;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 5px;
              }
        
              .buttons {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
              }
        
              .btn {
                font-size: 18px;
                padding: 15px;
                background-color: #006AA7;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s;
              }
        
              .btn:hover {
                background-color: #004C6D;
              }
        
              .operator {
                background-color: #004C6D;
              }
        
              #clear {
                background-color: #F44336;
              }
            `,
            js: `
              const display = document.getElementById('calc-display');
              let currentInput = '';
              let previousInput = '';
              let operator = '';
        
              // Handle number input
              document.querySelectorAll('.num').forEach(button => {
                button.addEventListener('click', () => {
                  currentInput += button.getAttribute('data-num');
                  display.value = currentInput;
                });
              });
        
              // Handle operators
              document.querySelectorAll('.operator').forEach(button => {
                button.addEventListener('click', () => {
                  if (currentInput === '') return;
                  operator = button.getAttribute('data-operator');
                  previousInput = currentInput;
                  currentInput = '';
                });
              });
        
              // Handle equal button
              document.getElementById('equals').addEventListener('click', () => {
                if (previousInput === '' || currentInput === '' || operator === '') return;
        
                const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                display.value = result;
                currentInput = result.toString();
                previousInput = '';
                operator = '';
              });
        
              // Handle clear button
              document.getElementById('clear').addEventListener('click', () => {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '0';
              });
        
              // Calculate the result
              function calculate(num1, num2, operator) {
                switch (operator) {
                  case '+':
                    return num1 + num2;
                  case '-':
                    return num1 - num2;
                  case '*':
                    return num1 * num2;
                  case '/':
                    return num1 / num2;
                  default:
                    return 0;
                }
              }
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
