const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://dev:TH@y!!3r@cluster0-0szqm.mongodb.net/cncnow?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.use(express.json());
app.use(routes);


app.listen(8001);
