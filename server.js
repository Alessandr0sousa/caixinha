const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
require('dotenv/config');

app.use(express.json());
app.use(cors());

app.use('/', require('./src/routes'))

app.listen(port);