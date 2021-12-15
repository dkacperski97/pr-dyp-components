import Component, { ComponentType, ComponentTypeAll } from '../../types/component';

const getTemplate = () => `
import React from 'react';
import TextField from '@material-ui/core/TextField';
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: any = (props: any) => {
    <%- helpers.getVariables(site, component) %>

	return (
        <TextField
            className={<%- helpers.getOption(site, component, 'styles') %>}
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
        { id: "styles", type: "styles", default: { templateId: 'styles', templateParameters: { 
            alignment: null, formats: [], background: null, backgroundColor: '#fff',
            marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0, 
            paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, 
            borderStyle: 'none', borderWidth: '1', borderColor: '#fff'
        } } },
        { id: "value", type: "number", default: { templateId: 'number', templateParameters: { number: 0 } } },
        { id: "label", type: "string", default: { templateId: 'text', templateParameters: { text: 'Label text' } } },
    ],
	getComponent: () => import('./NumberInput'),
	getTemplate
};

export default numberInput;
