const express = require("express");
const { OpenBrowser } = require("./puppeteer");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/api/submit', async (req, res) => {
    try {
        // Extract the data from the user
        const query = req.body;

        // Wait for the OpenBrowser function to complete
        await OpenBrowser(query);

        // Send a success response
        res.status(200).send("Browser filled out successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed to query the browser");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
