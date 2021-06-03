import Component, { ComponentType } from '../../types/component';

const form: Component = {
	id: 'form',
	type: ComponentType.Common,
	getOptions: () => import('../flexbox/FlexboxOptions'),
	getComponent: () => import('../flexbox/Flexbox'),
	template: '',
};

export default form;
