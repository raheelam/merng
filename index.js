const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose'); //to connect to database mongodb

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js'); //from the same directory




const server = new ApolloServer({
    typeDefs,
    resolvers
});

//connect to database before starting server Server
mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('mongoDB connected.');
    return server.listen({ port: 5000 });
}).then((res) => {
    console.log("Server running at ", res.url);
   }
   );
