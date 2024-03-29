import Hook from '../../types/hook';

const getTemplate = () => `
<%
const getRouteObjectString = (r) => "{ id: '" + site.components.find(c => c.id === r.component).name + "', url: '" + r.url + "', component: <" + helpers.getComponentName(site.components.find(c => c.id === r.component)) + " /> }, \\n"
%>
import React from 'react';
<%- hook.templateParameters.routes.map(r => site.components.find(c => c.id === r.component)).map(c => helpers.getComponentImport(c, pathToComponents)).join('') %>

const useRoutes = (props: any, variables: any) => {
	return React.useState([
<%- hook.templateParameters.routes.map(getRouteObjectString).join('') %>
    ]);
};

export default useRoutes;
`

const routes: Hook = {
	id: 'routes',
	getType: () => 'any',
	getEditorForm: () => import('./RoutesForm'),
	getTemplate
};

export default routes;
