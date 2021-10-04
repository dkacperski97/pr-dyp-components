import Component, { ComponentType, ComponentTypeAll } from '../../types/component';

const getTemplate = () => `
import React from 'react';
import TextField from '@material-ui/core/TextField';
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: any = (props: any) => {
    <%- helpers.getVariables(site, component) %>

	return (
        <TextField
            label={<%- helpers.getOption(site, component, 'label') %>}
            type="number"
            value={<%- helpers.getOption(site, component, 'value') %>}
            onChange={(e) => <%- helpers.getOptionSetter(site, component, 'value') %>(e.target.value)}
        />
	);
};

export default <%- helpers.getComponentName(component) %>;
`

const numberInput: Component = {
	id: 'numberInput',
	type: ComponentType.Common,
    getOptions: [
        { id: "value", type: "number", default: { templateId: 'number', templateParameters: { number: 0 } } },
        { id: "label", type: "string", default: { templateId: 'text', templateParameters: { text: 'Label text' } } },
    ],
	getComponent: () => import('./NumberInput'),
	getTemplate
};

export default numberInput;
