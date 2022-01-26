import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';

const useTextFromVariable: any = (props: any, variables: any) => {
    return [variables<%- hook.templateParameters.path %> || ""];
};

export default useTextFromVariable;
`

const textFromVariable: Hook = {
	id: 'textFromVariable',
	getType: () => 'string',
	getEditorForm: () => import('./TextFromVariableForm'),
	getTemplate
};

export default textFromVariable;
