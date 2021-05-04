import Component, { ComponentType } from '../types/component';

const list: Component = {
	id: 'list',
	type: ComponentType.Common,
	getOptions: () => [],
	getComponent: () => import('./List'),
	template: '',
};

export default list;
