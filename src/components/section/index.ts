import Component, { ComponentType } from '../../types/component';

const section: Component = {
	id: 'section',
	type: ComponentType.Common,
	getOptions: () => [],
	getComponent: () => import('../grid/Grid'),
	template: '',
};

export default section;
