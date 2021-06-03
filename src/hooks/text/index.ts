import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';

const useText: any = (..._: any[]) => {
    const textState = React.useState<string>(<%- hook.templateParameters.text %>);
    return textState;
};

export default useText;
`

const text: Hook = {
	id: 'text',
	getType: () => 'string',
	getEditorForm: () => import('./TextForm'),
	getTemplate
};

export default text;
