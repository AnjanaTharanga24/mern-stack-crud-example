const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute')
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/user", userRoutes);