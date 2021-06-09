import Hook from '../../types/hook';

const getTemplate = () => `
<%
const c = site.components.find((c) => c.variables.find((v) => v.id === hook.templateParameters.variable))
const v = c.variables.find((v) => v.id === hook.templateParameters.variable)
// TODO: co jak undefined?
%>
import React from 'react';

const useProp: any = (props: any, variables: any) => {
	const {<%- helpers.getVariable(v) %>} = props;
	return [<%- helpers.getVariable(v) %>];
};

export default useProp;
`

const prop: Hook = {
	id: 'prop',
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
	getEditorForm: () => import('./PropForm'),
	getTemplate
};

export default prop;
