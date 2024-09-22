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
