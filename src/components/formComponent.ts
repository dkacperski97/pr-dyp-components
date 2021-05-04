import Component, { ComponentType } from '../types/component';

const form: Component = {
	id: 'form',
	type: ComponentType.Common,
	getOptions: () => [],
	getComponent: () => import('./Grid'),
	template: '',
};

export default form;
