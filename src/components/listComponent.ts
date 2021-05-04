import Component, { ComponentType } from '../types/component';

const list: Component = {
	id: 'list',
	type: ComponentType.Common,
	options: [],
	component: () => import('./List'),
	template: '',
};

export default list;
