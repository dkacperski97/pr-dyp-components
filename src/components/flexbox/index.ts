import Component, { ComponentType, ComponentTypeAll } from '../../types/component';

const template = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
});

const Flexbox: React.FC = ({ children }) => {
    const classes = useStyles();

	return (
		<div className={classes.root}>
			{children}
		</div>
	);
};

export default Flexbox;
`

const flexbox: Component = {
	id: 'flexbox',
	type: ComponentType.Layout,
	getComponent: () => import('./Flexbox'),
	getOptions: () => import('./FlexboxOptions'),
	getChildrenTypes: (config) => Array(config['amount']).fill(ComponentTypeAll),
	template
};

export default flexbox;
