import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: React.FC<any> = (props) => {
    <%- helpers.getVariables(site, component) %>

	return props.children && <%- helpers.getOption(site, component, 'array') %> ? <%- helpers.getOption(site, component, 'array') %>.map((value, index) => React.Children.map(
        props.children, 
        (child) => React.cloneElement(child, {
            children: React.Children.map(
                child.props.children, 
                (subchild) => React.cloneElement(subchild, { key: index, value, index })
            )
        })
    )) : null;
};

export default <%- helpers.getComponentName(component) %>;
`

const map: Component = {
	id: 'map',
	type: ComponentType.Common,
    getOptions: [
        { id: "array", type: "array", default: { templateId: 'query', templateParameters: { query: 'query { cat }' } } },
    ],
	getTemplate
};

export default map;
