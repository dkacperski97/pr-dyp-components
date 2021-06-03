import Component, { ComponentType } from '../../types/component';

const custom: Component = {
	id: 'custom',
	type: ComponentType.Common,
	getOptions: () => import('../flexbox/FlexboxOptions'),
	getComponent: () => import('../flexbox/Flexbox'),
	template: '',
};

export default custom;
