const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data from frontend forms
app.use(express.json());

// Serve all our static assets from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Full Stack API Route: Handles customer submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validation Check
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "Please fill out all fields." });
    }

    // Real-world use case: You could save this to a database (MongoDB/PostgreSQL) 
    // or integrate an email API here. For now, we'll log it on our backend console.
    console.log(`📩 New Pitch/Lead Received from website:`);
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Send a real response back to the client UI
    res.status(200).json({ 
        success: true, 
        message: `Thank you, ${name}! Your message was successfully received by the backend server.` 
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running live on http://localhost:${PORT}`);
});