var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');

// Graph Schema

var schema = buildSchema(`
    type Query {
        message: String,
        likes: Int
    }
`);

// Root resolver
var root = {
    message: () => 'hello grapheQL!!',
    likes: 2259
};

// Create an express server and GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now running On localhos:4000/graphql'));

