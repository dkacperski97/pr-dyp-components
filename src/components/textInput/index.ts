import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';
import TextField from '@material-ui/core/TextField';
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: React.FC<any> = (props) => {
    <%- helpers.getVariables(site, component) %>

	return (
        <TextField
            className={<%- helpers.getOption(site, component, 'styles') %>}
            label={<%- helpers.getOption(site, component, 'label') %>}
            type="text"
            value={<%- helpers.getOption(site, component, 'value') %>}
            onChange={(e) => <%- helpers.getOptionSetter(site, component, 'value') %>(e.target.value)}
        />
	);
};

export default <%- helpers.getComponentName(component) %>;
`

const textInput: Component = {
	id: 'textInput',
	type: ComponentType.Common,
    getOptions: [
        { id: "styles", type: "styles", default: { templateId: 'styles', templateParameters: { 
            alignment: null, formats: [], background: null, backgroundColor: 'rgba(255, 255, 255, 0)',
            marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0, 
            paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, 
            borderStyle: 'none', borderWidth: '1', borderColor: 'rgba(255, 255, 255, 0)'
        } } },
        { id: "value", type: "string", default: { templateId: 'text', templateParameters: { text: '' } } },
        { id: "label", type: "string", default: { templateId: 'text', templateParameters: { text: 'Label text' } } },
    ],
	getTemplate
};

export default textInput;
