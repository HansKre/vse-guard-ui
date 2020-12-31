import ApolloClient from 'apollo-boost';
import Config from '../config';

/**
 * Client to make connection to GraphQL-API
 */
const graphQlClient = new ApolloClient({
    uri: Config.GRAPHQL_URL
});

export default graphQlClient;