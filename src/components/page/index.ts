import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';

const Page: React.FC = () => {
	return (
        
	);
};

export default Page;
`

const page: Component = {
	id: 'page',
	type: ComponentType.Hidden,
	getOptions: [],
	getComponent: () => import('./Page'),
	getTemplate
};

export default page;
