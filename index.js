const { ApolloServer } = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')

//Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        const myContext = "hi";
        
        return {
            myContext
        };
    }
});

//Start server
server.listen().then(({url}) =>
    console.log(`Server ready on url ${url}`)
)
