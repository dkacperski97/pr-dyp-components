import React from 'react';
import Props from '../types/props';
import DropTarget from './helpers/DropTarget';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
});

const Grid: React.FC<Props> = ({ children, setChild }) => {
    const classes = useStyles();
	const amount = 3;
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