import React from 'react';
import Props from '../types/props';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
	  columnGap: '10px',
	  rowGap: '10px',
    },
});

const Grid: React.FC<Props> = ({ children }) => {
    const classes = useStyles();
	
	return (
		<div className={classes.root}>
			{children}
		</div>
	);
};

export default Grid;