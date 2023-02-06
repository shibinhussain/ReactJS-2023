let { graphql, buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    helloo: String
  }
`);

let rootValue = { helloo: () => 'Hello world!' };

let source = '{ helloo }';

// console.log(`Schema : ${schema} \n Source: ${source} \n Root-Value: ${rootValue} `)

graphql({ schema, source, rootValue }).then((response) => {
  console.log(rootValue)
  console.log(response);
});