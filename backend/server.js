const express = require('express');
const sequelize = require('./models/index');
const app = express();
const port = 3000;
const studentRoutes = require('./routes/students');

app.use(express.json());
app.use('api', studentRoutes);


app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Server is running at http://localhost:${port}`);
});