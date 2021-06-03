import React, { useEffect } from 'react';
import { OptionsProps } from '../../types/props';
import TextField from '@material-ui/core/TextField';

const FlexboxOptions: React.FC<OptionsProps> = ({ config, setConfig }) => {
    useEffect(() => {
        console.log(config)
        if (config === undefined) {
            setConfig(() => ({ amount: 3 }));
        }
    }, [config])
    const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfig(prev => ({ ...prev, amount: parseInt(event.target.value) }));
    };

	return config ? (
		<TextField
          id="amount"
          label="Amount"
          type="number"
          value={config.amount}
          onChange={onAmountChange}
        />
    ) : null;
};

export default FlexboxOptions;