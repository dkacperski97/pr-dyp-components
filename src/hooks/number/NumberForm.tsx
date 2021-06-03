import React, { useEffect } from "react";
import { OptionsProps } from "../../types/props";
import TextField from "@material-ui/core/TextField";
import { useOptionsProps } from "../useOptionsProps";
import { getNewTemplateParams } from "../getNewTemplateParams";

const NumberForm: React.FC<OptionsProps> = ({ site, setSite, componentId, variableId }) => {
    const [component, variable] = useOptionsProps(site, componentId, variableId);
    useEffect(() => {
        if (variable) {
            if (variable.templateParameters === undefined) {
                setSite((prev) => getNewTemplateParams(prev, componentId, variableId, { number: 0 }));
            }
        }
    }, [site, variable, componentId, variableId]);

    const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSite((prev) => getNewTemplateParams(prev, componentId, variableId, { number: event.target.valueAsNumber }));
    };

    return variable?.templateParameters ? (
        <TextField
            id="number"
            label="Number"
            type="number"
            value={variable.templateParameters.number}
            onChange={onNumberChange}
        />
    ) : null;
};

export default NumberForm;
