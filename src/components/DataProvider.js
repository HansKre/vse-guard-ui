import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import graphQlClient from './GraphQlClient';

/**
 * Connects to passed client and provides data to children down the tree.
 */
const DataProvider = ({ children }) => {
    return (
        <ApolloProvider client={graphQlClient}>
            {children}
        </ApolloProvider>
    )
}

export default DataProvider;