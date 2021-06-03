import Component, { ComponentType } from '../../types/component';

const chart: Component = {
	id: 'image',
	type: ComponentType.Common,
	getOptions: () => import('../flexbox/FlexboxOptions'),
	getComponent: () => import('../flexbox/Flexbox'),
	template: '',
};

export default chart;
