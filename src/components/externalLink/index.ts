import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';
import { Button } from '@material-ui/core';
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: React.FC<any> = (props) => {
    <%- helpers.getVariables(site, component) %>

	return (
		<Button 
			className={<%- helpers.getOption(site, component, 'styles') %>}
			variant="contained"
			target="_blank"
			href={<%- helpers.getOption(site, component, 'url') %>}
		>
			{<%- helpers.getOption(site, component, 'value') %>}
		</Button>
	)
}

export default <%- helpers.getComponentName(component) %>;
`

const externalLink: Component = {
	id: 'externalLink',
	type: ComponentType.Common,
	getOptions: [
		{ id: "styles", type: "styles", default: { templateId: 'styles', templateParameters: { 
            alignment: null, formats: [], background: null, backgroundColor: 'rgba(255, 255, 255, 0)',
            marginLeft: null, marginTop: null, marginRight: null, marginBottom: null, 
            paddingLeft: null, paddingTop: null, paddingRight: null, paddingBottom: null, 
            borderStyle: 'none', borderWidth: '1', borderColor: 'rgba(255, 255, 255, 0)'
        } } },
		{ id: "value", type: "string", default: { templateId: 'text', templateParameters: { text: 'Link text' } } },
		{ id: "url", type: "string", default: { templateId: 'text', templateParameters: { text: 'https://reactjs.org/' } } },
	],
	getTemplate
};

export default externalLink;
