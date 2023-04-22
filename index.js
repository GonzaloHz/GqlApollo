const { ApolloServer, gql } = require('apollo-server')

const courses = [
    {
        title: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tech: 'JavaScript ES6',
    },
    {
        title: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tech: 'ReactJS',
    },
    {
        title: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        tech: 'Node.js'
    }, 
    {
        title: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        tech: 'React'
    }
];

//Schema
const typeDefs = gql`
    type Course {
        title: String
        tech: String
    }
    type Tech {
        tech: String
    }

    type Query {
        getCourses : [Course]
        getTech : [Tech]
    }
`

//Resolvers
const resolvers = {
    Query: {
        getCourses: () => courses,
        getTech: ()=> courses
    }
}

//Server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

//Start server
server.listen().then(({url}) =>
    console.log(`Server ready on url ${url}`)
)
