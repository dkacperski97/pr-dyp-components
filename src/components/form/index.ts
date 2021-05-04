import Component, { ComponentType } from '../../types/component';

const form: Component = {
	id: 'form',
	type: ComponentType.Common,
	getOptions: () => [],
	getComponent: () => import('../grid/Grid'),
	template: '',
};

export default form;
