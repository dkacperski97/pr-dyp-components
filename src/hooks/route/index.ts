import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';
<% v = { name: 'routes' } %>
<%- helpers.getVariableImport(v, pathToComponents) %>

const useRoute: any = (props: any, variables: any) => {
    const [<%- helpers.getVariable(v) %>] = <%- helpers.getHookName(v) %>(props, {});
    const page = "<%- hook.templateParameters.page %>";
    const route = <%- helpers.getVariableName(v) %>.find(r => r.id === page);
    return [route ? route.url : '', undefined];
};

export default useRoute;
`

const route: Hook = {
	id: 'route',
	getType: () => 'string',
	getEditorForm: () => import('./RouteForm'),
	getTemplate
};

export default route;
