import React from 'react';
import Props from '../types/props';
import DropTarget from './helpers/DropTarget';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
	  columnGap: '10px',
	  rowGap: '10px',
    },
});

const Grid: React.FC<Props> = ({ config, setChild, children }) => {
    const classes = useStyles();
	const { amount } = config;
	const getContent = () => {
		const content = [];
		for (let a = 0; a < amount; a++) {
			content.push(children[a] !== undefined ? children[a] : (<DropTarget key={a} index={a} setChild={setChild} />));
		}
		return content;
	}
	return (
		<div className={classes.root}>
			{getContent()}
		</div>
	);
};

export default Grid;