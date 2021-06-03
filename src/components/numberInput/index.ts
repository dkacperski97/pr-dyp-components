import Component, { ComponentType, ComponentTypeAll } from '../../types/component';

const getTemplate = () => `
import React from 'react';
import TextField from '@material-ui/core/TextField';
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const NumberInput: any = (props: any) => {
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

export default NumberInput;
`

const numberInput: Component = {
	id: 'numberInput',
	type: ComponentType.Common,
    getOptions: [
        { id: "value", type: "number" },
        { id: "label", type: "string" },
    ],
	getComponent: () => import('./NumberInput'),
	getTemplate
};

export default numberInput;
