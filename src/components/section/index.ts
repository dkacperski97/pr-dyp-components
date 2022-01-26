import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: React.FC<any> = (props) => {
    <%- helpers.getVariables(site, component) %>

	return (
		<Card className={<%- helpers.getOption(site, component, 'styles') %>}>
			<CardContent>
				{props.children}
			</CardContent>
		</Card>
	);
};

export default <%- helpers.getComponentName(component) %>;
`

const section: Component = {
	id: 'section',
	type: ComponentType.Common,
    getOptions: [
        { id: "styles", type: "styles", default: { templateId: 'styles', templateParameters: { 
            alignment: null, formats: [], background: null, backgroundColor: 'rgba(255, 255, 255, 0)',
            marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0, 
            paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, 
            borderStyle: 'none', borderWidth: '1', borderColor: 'rgba(255, 255, 255, 0)'
        } } },
    ],
	getTemplate
};

export default section;
