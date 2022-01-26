import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: React.FC<any> = (props) => {
    <%- helpers.getVariables(site, component) %>
	const history = useHistory();

	return (
		<div className={<%- helpers.getOption(site, component, 'styles') %>}>
			{props.children}

			<Button variant="contained" color="primary" onClick={() => { <%- helpers.getOptionSetter(site, component, 'onSubmit') %>(); setTimeout(() => { history.push(<%- helpers.getOption(site, component, 'afterSubmitRedirectTo') %>)}, 1000); } }>
				{<%- helpers.getOption(site, component, 'submitText') %>}
			</Button>
		</div>
	);
};

export default <%- helpers.getComponentName(component) %>;
`

const form: Component = {
	id: 'form',
	type: ComponentType.Common,
	getOptions: [
		{ id: "styles", type: "styles", default: { templateId: 'styles', templateParameters: { 
            alignment: null, formats: [], background: null, backgroundColor: 'rgba(255, 255, 255, 0)',
            marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0, 
            paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, 
            borderStyle: 'none', borderWidth: '1', borderColor: 'rgba(255, 255, 255, 0)'
        } } },
		{ id: "submitText", type: "string", default: { templateId: 'text', templateParameters: { text: 'Submit' } } },
		{ id: "onSubmit", type: "any", default: { templateId: 'mutation', templateParameters: { mutation: 'mutation { cat }' } } },
		{ id: "afterSubmitRedirectTo", type: "string", default: { templateId: 'route', templateParameters: { page: '' } } },
	],
	getTemplate
};

export default form;
