import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Props } from '../../types/props';

const NumberInput: React.FC<Props> = (props) => {
	return (
        <TextField
            label="Number"
            type="number"
            disabled
        />
	);
};

export default NumberInput;