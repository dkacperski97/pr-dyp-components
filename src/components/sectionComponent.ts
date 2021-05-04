import Component, { ComponentType } from '../types/component';

const section: Component = {
	id: 'section',
	type: ComponentType.Common,
	getOptions: () => [],
	getComponent: () => import('./Grid'),
	template: '',
};

export default section;
