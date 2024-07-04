const express = require('express');
const {connectedToMongoDB} = require('./configuration/dbConfig');
const app = express();
const PORT = process.env.PORT || 5000;

connectedToMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
