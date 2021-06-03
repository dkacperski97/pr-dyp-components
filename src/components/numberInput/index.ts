import Component, { ComponentType, ComponentTypeAll } from '../../types/component';

const getTemplate = () => `
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Props } from '../../types/props';

const NumberInput: React.FC<Props> = (props) => {
	return (
        <TextField
            label="Number"
            type="number"
        />
	);
};

export default NumberInput;
`

const numberInput: Component = {
	id: 'numberInput',
	type: ComponentType.Common,
    getOptions: [
        { id: "value", type: "number" },
        { id: "label", type: "string" },
		{ id: "onChange", type: "function" }
    ],
	getComponent: () => import('./NumberInput'),
	getTemplate
};

export default numberInput;
