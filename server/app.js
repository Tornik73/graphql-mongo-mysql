const express = require('express');
const graphqlHTTP =  require("express-graphql");
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');

const MONGO_CONNECTION_STRING = "mongodb+srv://<username>:<password>@cluster0-cmeep.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

app.use(cors());

mongoose.connect(MONGO_CONNECTION_STRING);
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
