import React, { useEffect } from "react";
import { OptionsProps } from "../../types/props";
import TextField from "@material-ui/core/TextField";
import { useOptionsProps } from "../useOptionsProps";
import { getNewTemplateParams } from "../getNewTemplateParams";

const defaultCode = `\
const [state, setState] = React.useState<string>();
return [state, setState];
`;

const CustomForm: React.FC<OptionsProps> = ({ site, setSite, componentId, variableId }) => {
    const [component, variable] = useOptionsProps(site, componentId, variableId);
    useEffect(() => {
        if (variable) {
            if (variable.templateParameters === undefined) {
                setSite((prev) =>
                    getNewTemplateParams(prev, componentId, variableId, {
                        code: defaultCode,
                        type: "string",
                    })
                );
            }
        }
    }, [site, variable, componentId, variableId]);

    const onCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { code: event.target.value })
        );
    };

    const onTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { type: event.target.value })
        );
    };

    return variable?.templateParameters ? (
        <>
            <TextField
                label="Code"
                fullWidth
                multiline
                rowsMax={6}
                value={variable.templateParameters.code}
                onChange={onCodeChange}
            />
            <TextField
                id="type"
                label="Type"
                value={variable.templateParameters.type}
                onChange={onTypeChange}
            />
        </>
    ) : null;
};

export default CustomForm;
