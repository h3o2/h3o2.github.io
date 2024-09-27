// Sample tasks per country
const tasks = {
    finland: {
        name: 'Finland',
        quests: [
            'Build a Finnish Railway Ticket Booking System',
            '',
        ]
    },
    sweden: {
        name: 'Sweden',
        quests: [
            'Fix the Swedish Meatball Recipe Calculator',
        ]
    },
    norway: {
        name: 'Norway',
        quests: [
            '',
        ]
    },
    russia: {
        name: 'Russia',
        quests: [
            '',
        ]
    },
    greenland: {
        name: 'Greenland',
        quests: [
            '',
        ]
    },
    canada: {
        name: 'Canada',
        quests: [
            '',
        ]
    },
    usa: {
        name: 'USA',
        quests: [
            '',
        ]
    },
    alaska: {
        name: 'Alaska',
        quests: [
            '',
        ]
    },
    mexico: {
        name: 'Mexico',
        quests: [
            '',
        ]
    },
    // Add more countries and tasks here
};

// Get elements for displaying the dropdown
const dropdown = document.getElementById('task-dropdown');
const countryName = document.getElementById('country-name');
const taskList = document.getElementById('task-list');

function showDropdown(countryId) {
    const countryTasks = tasks[countryId];
    countryName.textContent = countryTasks.name;

    // Clear previous tasks
    taskList.innerHTML = '';

    // Populate new tasks as links
    countryTasks.quests.forEach((task, index) => {
        const li = document.createElement('li');
        const taskLink = document.createElement('a');
        
        taskLink.textContent = task;
        taskLink.href = `task.html?country=${countryId}&task=${index}`; // Link to the task page with parameters
        
        li.appendChild(taskLink);
        taskList.appendChild(li);
    });

    // Display the dropdown
    dropdown.style.display = 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.country') && !e.target.closest('#task-dropdown')) {
        dropdown.style.display = 'none';
    }
});

document.getElementById("close-dropdown-button").addEventListener("click", () => {
    dropdown.style.display = 'none';
})

document.addEventListener('DOMContentLoaded', function () {
    const svgObject = document.getElementById('world-map');

    // Add an event listener to detect when the SVG file is fully loaded
    svgObject.addEventListener('load', function () {
        // Access the SVG document inside the <object>
        const svgDoc = svgObject.contentDocument;

        // Now you can select elements inside the SVG using the svgDoc
        const countries = svgDoc.querySelectorAll('.country');

        // Attach event listeners to the country elements
        countries.forEach(country => {
            country.addEventListener('click', function () {
                const countryId = this.id;  // Get the ID of the clicked country
                console.log('Country clicked:', countryId);  // Debugging: Log the country ID
                
                // Show the dropdown and tasks if the country has defined tasks
                if (tasks[countryId]) {
                    showDropdown(countryId); 
                }
            });
        });
    });
});




