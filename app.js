const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'view');

const PORT = 3000;

app.listen(PORT);
