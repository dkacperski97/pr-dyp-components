import Component, { ComponentType } from '../types/component';

const custom: Component = {
	id: 'custom',
	type: ComponentType.Common,
	options: [],
	component: () => import('./Grid'),
	template: '',
};

export default custom;
