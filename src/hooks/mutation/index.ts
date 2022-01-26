import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';
import { gql, useMutation } from "@apollo/client";

const MUT = gql\`
<%- hook.templateParameters.mutation %>
\`;

const useMyMutation: any = (props: any, variables: any) => {
    const [mutate] = useMutation(MUT, { variables });
    return [null, mutate];
};

export default useMyMutation;
`

const mutation: Hook = {
	id: 'mutation',
	getType: () => 'any',
	getEditorForm: () => import('./MutationForm'),
	getTemplate
};

export default mutation;
