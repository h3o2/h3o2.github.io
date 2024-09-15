// Array of levels with tag instructions and expected outputs
const levels = [
    {
        instruction: "Let's start by adding a heading tag. Use <h1> to create a heading \"This is a Heading\".",
        expectedHTML: '<h1>This is a Heading</h1>',
        successMessage: "Great! You've learned how to create an H1 heading!",
    },
    {
        instruction: "Now let's add a paragraph. Use <p> to create a paragraph \"This is a paragraph.\".",
        expectedHTML: '<p>This is a paragraph.</p>',
        successMessage: "Good job! You've learned how to create a paragraph!",
    },
    {
        instruction: "Let's add an image! Use <img src=\"image-url\" alt=\"description\" />. Use URL https://via.placeholder.com/150 and alt Placeholder image",
        expectedHTML: '<img src="https://via.placeholder.com/150" alt="Placeholder image" />',
        successMessage: "Nice! You've learned how to add an image!",
    },
    {
        instruction: "Create a link using <a href=\"url\">text</a> to make clickable links. Use URL https://example.com and text Click here",
        expectedHTML: '<a href="https://example.com">Click here</a>',
        successMessage: "Awesome! You created a link!",
    },
    {
        instruction: "Add an unordered list with three items: Apple, Banana, and Cherry. Use <ul> and <li> tags.",
        expectedHTML: '<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>',
        successMessage: "Great! You've created an unordered list!",
    },
    {
        instruction: "Create an ordered list with three steps: Step 1, Step 2, and Step 3. Use <ol> and <li> tags.",
        expectedHTML: '<ol><li>Step 1</li><li>Step 2</li><li>Step 3</li></ol>',
        successMessage: "Well done! You've created an ordered list!",
    },
    {
        instruction: "Create a button using <button> tag with the text \"Click Me\".",
        expectedHTML: '<button>Click Me</button>',
        successMessage: "Awesome! You've created a button!",
    },
    {
        instruction: "Create a form with a text input field using <input type=\"text\">.",
        expectedHTML: '<form><input type="text"></form>',
        successMessage: "Nice! You've created a text input field!",
    },
    {
        instruction: "Create a form with a password field using <input type=\"password\">.",
        expectedHTML: '<form><input type="password"></form>',
        successMessage: "Good job! You've created a password field!",
    },
    {
        instruction: "Add a checkbox using <input type=\"checkbox\">.",
        expectedHTML: '<input type="checkbox">',
        successMessage: "Excellent! You've added a checkbox!",
    },
    {
        instruction: "Add a radio button using <input type=\"radio\">.",
        expectedHTML: '<input type="radio">',
        successMessage: "Well done! You've added a radio button!",
    },
    {
        instruction: "Create a form with a submit button using <input type=\"submit\">.",
        expectedHTML: '<form><input type="submit"></form>',
        successMessage: "Awesome! You've created a submit button!",
    },
    {
        instruction: "Create a horizontal rule using the <hr> tag.",
        expectedHTML: '<hr>',
        successMessage: "Great! You've added a horizontal rule!",
    },
    {
        instruction: "Create a strong text using the <strong> tag with the text \"Bold Text\".",
        expectedHTML: '<strong>Bold Text</strong>',
        successMessage: "Awesome! You've created bold text!",
    },
    {
        instruction: "Create emphasized text using the <em> tag with the text \"Italic Text\".",
        expectedHTML: '<em>Italic Text</em>',
        successMessage: "Good job! You've created italic text!",
    },
    {
        instruction: "Create a blockquote using the <blockquote> tag with the text \"This is a quote.\".",
        expectedHTML: '<blockquote>This is a quote.</blockquote>',
        successMessage: "Excellent! You've created a blockquote!",
    },
    {
        instruction: "Create a table with one row and two columns. Use <table>, <tr>, and <td> tags. Name the first column \"Column 1\" and the second \"Column 2\".",
        expectedHTML: '<table><tr><td>Column 1</td><td>Column 2</td></tr></table>',
        successMessage: "Nice! You've created a table!",
    },
    {
        instruction: "Create a div container with the text \"This is a div\" using the <div> tag.",
        expectedHTML: '<div>This is a div</div>',
        successMessage: "Awesome! You've created a div container!",
    },
    {
        instruction: "Create a span element with the text \"This is a span\" using the <span> tag.",
        expectedHTML: '<span>This is a span</span>',
        successMessage: "Good job! You've created a span element!",
    },
    {
        instruction: "Add a line break using the <br> tag between the two lines \"Line 1\" and \"Line 2\".",
        expectedHTML: 'Line 1<br>Line 2',
        successMessage: "Great! You've added a line break!",
    },
    {
        instruction: "Create a heading level 2 (h2) with the text \"Subheading\".",
        expectedHTML: '<h2>Subheading</h2>',
        successMessage: "Nice! You've created an h2 subheading!",
    },
    {
        instruction: "Create a heading level 3 (h3) with the text \"Section Title\".",
        expectedHTML: '<h3>Section Title</h3>',
        successMessage: "Well done! You've created an h3 heading!",
    },
    {
        instruction: "Create a table with one header and two columns. Use <thead>, <tr>, <th>, and <td> tags. Name the header \"Header\" and columns \"Cell 1\" and \"Cell 2\"",
        expectedHTML: '<table><thead><tr><th>Header</th></tr></thead><tr><td>Cell 1</td><td>Cell 2</td></tr></table>',
        successMessage: "Awesome! You've added a table header!",
    },
    {
        instruction: "Create a definition list using <dl>, <dt> (definition term), and <dd> (definition description) with terms \"HTML\" HyperText Markup Language and \"CSS\" Cascading Style Sheets.",
        expectedHTML: '<dl><dt>HTML</dt><dd>HyperText Markup Language</dd><dt>CSS</dt><dd>Cascading Style Sheets</dd></dl>',
        successMessage: "Great! You've created a definition list!",
    },
    {
        instruction: "Create a hyperlink that opens in a new tab using <a href=\"url\" target=\"_blank\">. Use URL https://example.com and text \"Open in new tab\".",
        expectedHTML: '<a href="https://example.com" target="_blank">Open in new tab</a>',
        successMessage: "Excellent! You've created a link that opens in a new tab!",
    },
    {
        instruction: "Create a form with a dropdown (select box) using <select> and <option> tags. Add options \"Option 1\", \"Option 2\", and \"Option 3\".",
        expectedHTML: '<form><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></form>',
        successMessage: "Good job! You've created a dropdown list!",
    },
    {
        instruction: "Create a text area using <textarea> with the placeholder \"Type here...\".",
        expectedHTML: '<form><textarea placeholder="Type here..."></textarea></form>',
        successMessage: "Awesome! You've created a text area!",
    },
    {
        instruction: "Create a navigation bar using the <nav> tag with links \"Home\", \"About\", and \"Contact\". Use URLS \"#home\", \"#about\", \"#contact\"",
        expectedHTML: '<nav><a href="#home">Home</a> <a href="#about">About</a> <a href="#contact">Contact</a></nav>',
        successMessage: "Great! You've created a navigation bar!",
    },
    {
        instruction: "Create a header section using the <header> tag with the text \"Welcome to My Website\".",
        expectedHTML: '<header>Welcome to My Website</header>',
        successMessage: "Nice! You've created a header section!",
    },
    {
        instruction: "Create a footer section using the <footer> tag with the text \"Copyright 2024\".",
        expectedHTML: '<footer>Copyright 2024</footer>',
        successMessage: "Well done! You've created a footer section!",
    },
    {
        instruction: "Create a section using the <section> tag with the heading \"About Us\".",
        expectedHTML: '<section><h2>About Us</h2></section>',
        successMessage: "Awesome! You've created a section!",
    },
    {
        instruction: "Create an article using the <article> tag with the heading \"My First Blog Post\" and a paragraph \"This is my first post.\".",
        expectedHTML: '<article><h2>My First Blog Post</h2><p>This is my first post.</p></article>',
        successMessage: "Good job! You've created an article!",
    },
    {
        instruction: "Create a figure using the <figure> tag and an image with alt \"Sunset\" and the caption \"A beautiful sunset\". Use image URL https://via.placeholder.com/150.",
        expectedHTML: '<figure><img src="https://via.placeholder.com/150" alt="Sunset"><figcaption>A beautiful sunset</figcaption></figure>',
        successMessage: "Nice! You've created a figure with a caption!",
    },
    {
        instruction: "Create a table with a row and three columns: \"Name\", \"Age\", and \"Location\".",
        expectedHTML: '<table><tr><td>Name</td><td>Age</td><td>Location</td></tr></table>',
        successMessage: "Awesome! You've created a table row with three columns!",
    },
    {
        instruction: "Create a table with two rows. Row 1: \"Name\" and \"John\". Row 2: \"Age\" and \"30\".",
        expectedHTML: '<table><tr><td>Name</td><td>John</td></tr><tr><td>Age</td><td>30</td></tr></table>',
        successMessage: "Great! You've created a table with two rows!",
    },
    {
        instruction: "Create a time element using the <time> tag with the datetime \"2024-01-01\". Text \"January 1, 2024\"",
        expectedHTML: '<time datetime="2024-01-01">January 1, 2024</time>',
        successMessage: "Well done! You've used the time element correctly!",
    },
    {
        instruction: "Create an address using the <address> tag with \"123 Main St, Springfield\".",
        expectedHTML: '<address>123 Main St, Springfield</address>',
        successMessage: "Nice! You've created an address!",
    },
    {
        instruction: "Add a video player using the <video> tag with a sample video from https://www.w3schools.com/html/mov_bbb.mp4. Add controls. Add text \"Your browser does not support the video tag.\".",
        expectedHTML: '<video controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
        successMessage: "Awesome! You've embedded a video!",
    },
    {
        instruction: "Create a progress bar using the <progress> tag with a value of 70 out of 100.",
        expectedHTML: '<progress value="70" max="100"></progress>',
        successMessage: "Good job! You've created a progress bar!",
    },
    {
        instruction: "Create a meter using the <meter> tag with a value of 0.7 and a maximum of 1.",
        expectedHTML: '<meter value="0.7" max="1"></meter>',
        successMessage: "Excellent! You've created a meter element!",
    },
    {
        instruction: "Embed an audio player using the <audio> tag with the source \"audio.mp3\". Add controls and text \"Your browser does not support the audio element.\".",
        expectedHTML: '<audio controls><source src="audio.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>',
        successMessage: "Great! You've embedded an audio player!",
    },
    {
        instruction: "Create an iframe using the <iframe> tag with the source URL \"https://example.com\".",
        expectedHTML: '<iframe src="https://example.com"></iframe>',
        successMessage: "Awesome! You've created an iframe!",
    },
    {
        instruction: "Create a datalist with options \"Option A\", \"Option B\", and \"Option C\". Use <datalist> and <option> tags. Add id \"options\" to the datalist.",
        expectedHTML: '<datalist id="options"><option value="Option A"><option value="Option B"><option value="Option C"></datalist>',
        successMessage: "Great! You've created a datalist!",
    },
    {
        instruction: "Create a figure using <figure> with an image and caption \"A sample image\" and alt \"Sample\". Use image URL https://via.placeholder.com/100.",
        expectedHTML: '<figure><img src="https://via.placeholder.com/100" alt="Sample"><figcaption>A sample image</figcaption></figure>',
        successMessage: "Good job! You've created a figure with an image and caption!",
    },
    {
        instruction: "Create a canvas element using the <canvas> tag with a width of 200 and a height of 100.",
        expectedHTML: '<canvas width="200" height="100"></canvas>',
        successMessage: "Awesome! You've created a canvas element!",
    },
    {
        instruction: "Embed a YouTube video using <iframe>. Use this URL: https://www.youtube.com/embed/dQw4w9WgXcQ. Set frameborder to \"0\" and allowfullscreen",
        expectedHTML: '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
        successMessage: "Great! You've embedded a YouTube video!",
    }
];

let currentLevel = 0;

document.addEventListener('DOMContentLoaded', function () {
    const instructionText = document.getElementById('instruction');
    const htmlInput = document.getElementById('html-input');
    const htmlOutput = document.getElementById('html-output').contentWindow.document;
    const checkButton = document.getElementById('check-button');
    const nextButton = document.getElementById('next-button');
    const messageBox = document.getElementById('message');
    
    // Load the current level
    function loadLevel() {
        const level = levels[currentLevel];
        instructionText.textContent = level.instruction;
        htmlInput.value = '';  // Clear input field
        htmlOutput.body.innerHTML = '';  // Clear the iframe
        messageBox.textContent = '';  // Clear message box
        nextButton.style.display = 'none';  // Hide next button initially
    }

    // Check if user's input matches the expected HTML
    function checkHTML() {
        const userInput = htmlInput.value.trim();
        const level = levels[currentLevel];

        // Update iframe output with user input
        htmlOutput.body.innerHTML = userInput;

        // Compare user input with expected HTML
        if (userInput === level.expectedHTML) {
            messageBox.textContent = level.successMessage;
            messageBox.style.color = 'green';
            nextButton.style.display = 'inline-block';  // Show next button
        } else {
            messageBox.textContent = 'Oops! That’s not quite right. Try again.';
            messageBox.style.color = 'red';
        }
    }

    // Move to the next level
    function nextLevel() {
        currentLevel++;
        if (currentLevel < levels.length) {
            loadLevel();
        } else {
            messageBox.textContent = 'Congratulations! You’ve completed all levels!';
            messageBox.style.color = 'blue';
            htmlInput.disabled = true;  // Disable input after completing all levels
            checkButton.disabled = true;
            nextButton.style.display = 'none';  // Hide next button
        }
    }

    // Event listeners
    checkButton.addEventListener('click', checkHTML);
    nextButton.addEventListener('click', nextLevel);

    // Load the first level on page load
    loadLevel();
});
