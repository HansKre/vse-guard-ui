'use strict';

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const data = require('../data/sections');

module.exports = function (app) {

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

};