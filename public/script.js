// Mobile Navbar Toggle (Optional Polish)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.backgroundColor = '#fff';
    navLinks.style.padding = '1rem';
});

// Asynchronous Full-Stack Form Handler
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop standard browser reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseDiv = document.getElementById('formResponse');

    responseDiv.textContent = "Sending message...";
    responseDiv.style.color = "orange";

    try {
        // Fetch API sending data to our Node.js Backend
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        if (response.ok) {
            responseDiv.textContent = data.message;
            responseDiv.style.color = "green";
            document.getElementById('contactForm').reset(); // Clear the inputs
        } else {
            responseDiv.textContent = "Oops! Something went wrong.";
            responseDiv.style.color = "red";
        }
    } catch (error) {
        console.error("Error:", error);
        responseDiv.textContent = "Could not connect to server.";
        responseDiv.style.color = "red";
    }
});