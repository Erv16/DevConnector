const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

// look for an environment varibale called port to use when deployed to heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
