import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';
<%- helpers.getComponentsImports(site, component, pathToComponents) %>
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: React.FC<any> = (props = {}) => {
	<%- helpers.getVariables(site, component) %>

	return (
        <>
			<%- helpers.getComponents(site, component) %>
		</>
	);
};

export default <%- helpers.getComponentName(component) %>;
`

const page: Component = {
	id: 'page',
	type: ComponentType.Hidden,
	getOptions: [],
	getTemplate
};

export default page;
