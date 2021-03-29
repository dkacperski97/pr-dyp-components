import React from 'react';
import { useDrop } from 'react-dnd';
import Props from '../../types/props';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    title: {
      textAlign: 'center',
      width: '100%',
    },
});

type DropTargetProps = {
	setChild: Props['setChild'];
	index: number;
};
const DropTarget: React.FC<DropTargetProps> = ({ setChild, index }) => {
    const classes = useStyles();
	const [, drop] = useDrop(() => ({
		accept: 'component',
		drop: (item: any) => setChild(item.id, index),
	}));

	return (
		<Card ref={drop} className={classes.root} variant="outlined">
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					Drop here
				</Typography>
			</CardContent>
		</Card>
	);
};

export default DropTarget;
