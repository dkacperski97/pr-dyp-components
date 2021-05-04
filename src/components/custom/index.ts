import Component, { ComponentType } from '../../types/component';

const custom: Component = {
	id: 'custom',
	type: ComponentType.Common,
	getOptions: () => [],
	getComponent: () => import('../grid/Grid'),
	template: '',
};

export default custom;
