import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: "<%- hook.templateParameters.uri %>",
    cache: new InMemoryCache(),
	defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'ignore',
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
    }
});

const useApolloClient = (props: any, variables: any) => {
    return [client];
};

export default useApolloClient;
`

const apolloClient: Hook = {
	id: 'apolloClient',
	getType: () => 'any',
	getEditorForm: () => import('./ApolloClientForm'),
	getTemplate
};

export default apolloClient;
