const { gql } = require('apollo-server')

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

module.exports = typeDefs;