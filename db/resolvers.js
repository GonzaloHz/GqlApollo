const courses = [
    {
        title: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tech: 'JavaScript ES6',
    },
    {
        title: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tech: 'React',
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


//Resolvers
const resolvers = {
    Query: {
        getCourses: () => courses,
        getTech: ()=> courses,
        getCoursesInput: (_, {input}, ctx, info) => {
            console.log(ctx)
            const result = courses.filter(c => c.tech === input.tech)
            return result;
        }
    }
}

module.exports = resolvers;