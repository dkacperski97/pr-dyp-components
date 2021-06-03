import Component, { ComponentType } from '../../types/component';

const section: Component = {
	id: 'section',
	type: ComponentType.Common,
	getOptions: () => import('../flexbox/FlexboxOptions'),
	getComponent: () => import('../flexbox/Flexbox'),
	template: '',
};

export default section;
