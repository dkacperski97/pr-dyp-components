import Component, { ComponentType, ComponentTypeAll } from '../../types/component';

const template = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
});

const Grid: React.FC = ({ children }) => {
    const classes = useStyles();

	return (
		<div className={classes.root}>
			{children}
		</div>
	);
};

export default Grid;
`

const grid: Component = {
	id: 'grid',
	type: ComponentType.Layout,
	getOptions: () => [
		{ id: 'amount', name: 'Number of columns', type: 'number', default: 3 },
	],
	getChildrenTypes: (config) => Array(config['amount']).fill(ComponentTypeAll),
	getComponent: () => import('./Grid'),
	template
};

export default grid;
