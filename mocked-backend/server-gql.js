const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const path = require('path');

const data = require('./data/sections');

const app = express();
const port = 4000;

// mounts online /static/images/cards to local /public
// https://expressjs.com/en/starter/static-files.html
app.use('/static/images/cards', express.static('public'))

const schema = buildSchema(`
  type Query {
    getSections: [Section]
  },
  type Section {
      title: String
      dataCards: [DataCard]
  },
  type DataCard {
      title: String
      icon: String
      environments: [Environment]
      chart: Chart
  },
  type Environment {
      name: String
      status: Boolean
  },
  type Chart {
      style: String
      data: Data
  },
  type Data {
      innerPie: [KeyValue]
      outerPie: [KeyValue]
      bars: [Bar]
      areas: [Bar]
  },
  type KeyValue {
      name: String
      value: Int
  },
  type Bar {
      name: String
      uv: Int
      pv: Int
      amt: Int
  }
`);

const getSections = () => {
    return data;
}

const resolver = {
    getSections: getSections,
};

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: resolver,
        graphiql: true,
    }),
);

app.listen(port, () => {
    console.log(`Graphiql available at http://localhost:${port}/graphql`)
})