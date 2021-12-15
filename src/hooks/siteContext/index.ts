import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';
import { SiteContext } from '<%- pathToComponents %>context/SiteContext';

const useSiteContext: any = (props: any, variables: any) => {
    const SiteContextValue = React.useContext(SiteContext);
	if (SiteContextValue === null || SiteContextValue.components["<%- helpers.u(hook.templateParameters.componentName) %>"] === undefined) {
		return [undefined, () => {}];
	}
	return [
		SiteContextValue.components["<%- helpers.u(hook.templateParameters.componentName) %>"]["<%- hook.templateParameters.variableName %>"],
		SiteContextValue.components["<%- helpers.u(hook.templateParameters.componentName) %>"]["set<%- helpers.u(hook.templateParameters.variableName) %>"]
	]
};

export default useSiteContext;
`

const siteContext: Hook = {
	id: 'siteContext',
	getType: () => 'string',
	getEditorForm: () => import('./SiteContextForm'),
	getTemplate
};

export default siteContext;
