import React, { useEffect } from 'react';
import { OptionsProps } from '../../types/props';
import TextField from '@material-ui/core/TextField';

const LabelOptions: React.FC<OptionsProps> = ({ config, setConfig }) => {
    useEffect(() => {
        if (config === undefined) {
            setConfig(() => ({ name: 'Label text' }));
        }
    }, [config])
    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfig(prev => ({ ...prev, name: event.target.value }));
    };

	return config ?  (
		<TextField
          id="amount"
          label="Amount"
          value={config.name}
          onChange={onNameChange}
        />
	) : null;
};

export default LabelOptions;