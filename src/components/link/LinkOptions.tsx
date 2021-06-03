import React, { useEffect } from 'react';
import { OptionsProps } from '../../types/props';
import TextField from '@material-ui/core/TextField';

const LinkOptions: React.FC<OptionsProps> = ({ config, setConfig }) => {
    useEffect(() => {
        if (config === undefined) {
            setConfig(() => ({ value: 'Link text', url: '' }));
        }
    }, [config])
    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfig(prev => ({ ...prev, value: event.target.value }));
    };
    const onUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfig(prev => ({ ...prev, url: event.target.value }));
    };

	return config ?  (
        <div>
            <TextField
            id="value"
            label="Value"
            value={config.value}
            onChange={onValueChange}
            />
            <TextField
            id="url"
            label="URL"
            value={config.url}
            onChange={onUrlChange}
            />
        </div>
	) : null;
};

export default LinkOptions;