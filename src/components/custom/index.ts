import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
<%- component.variables[0].templateParameters.text %>
`

const custom: Component = {
	id: 'custom',
	type: ComponentType.Common,
	getOptions: [
		{ id: "code", type: "string", default: { templateId: 'text', templateParameters: { text: 'import React from "react";\nconst MyComponent: React.FC<any> = (props) => <h1>Custom component</h1>\nexport default MyComponent' } } },
	],
	getTemplate
};

export default custom;
