import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';

const useNumber: any = (..._: any[]) => {
    const numberState = React.useState<number>(<%- hook.templateParameters.number %>);
    return numberState;
};

export default useNumber;
`

const number: Hook = {
	id: 'number',
	getType: () => 'number',
	getEditorForm: () => import('./NumberForm'),
	getTemplate
};

export default number;
