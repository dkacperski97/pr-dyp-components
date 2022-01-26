import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';
import { gql, useQuery } from "@apollo/client";

const GET = gql\`
<%- hook.templateParameters.query %>
\`;

const useMyQuery: any = (props: any, variables: any) => {
    const { data } = useQuery<any>(GET, { variables });
    return [data];
};

export default useMyQuery;
`

const query: Hook = {
	id: 'query',
	getType: () => 'any',
	getEditorForm: () => import('./QueryForm'),
	getTemplate
};

export default query;
