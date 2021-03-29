import React from 'react';
import Component from '../types/component';
import Props from '../types/props';
import MuiList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const List: React.FC<Props> = () => {
	const values = ["aaaaa", "bbbbb", "ccccc"];
	return (
		<MuiList>
			{values.map(v =>
				<ListItem button key={v}>
					<ListItemText
						primary={v}
					/>
				</ListItem>
			)}
		</MuiList>
	);
};

const list: Component = {
	id: 'list',
	options: [],
	component: List,
	template: '',
};

export default list;
