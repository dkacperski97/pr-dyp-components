import Component, { ComponentType } from '../types/component';

const form: Component = {
	id: 'form',
	type: ComponentType.Common,
	options: [],
	component: () => import('./Grid'),
	template: '',
};

export default form;
