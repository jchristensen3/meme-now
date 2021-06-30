require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const constants = require('./constants');
const jwt = require('jsonwebtoken');

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.use('/user', routes.user);
app.use('/auth', routes.auth);

app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})