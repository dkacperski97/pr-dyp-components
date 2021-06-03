import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';

const useCustom: any = (..._: any[]) => {
<%- hook.templateParameters.code %>
};

export default useCustom;
`

const custom: Hook = {
	id: 'custom',
	getType: ({ site, componentId, variableId }) => {
		const component = site.components.find((c) => c.id === componentId);
        if (component) {
            const variable = component.variables.find((v) => v.id === variableId);
			if (variable) {
				return variable.templateParameters?.type || 'undefined';
			}
		}
		return 'undefined';
	},
	getEditorForm: () => import('./CustomForm'),
	getTemplate
};

export default custom;
