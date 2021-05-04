import Component, { ComponentType } from '../types/component';

const section: Component = {
	id: 'section',
	type: ComponentType.Common,
	options: [],
	component: () => import('./Grid'),
	template: '',
};

export default section;
