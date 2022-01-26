import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { OptionsProps } from "../../types/props";
import { useOptionsProps } from "../useOptionsProps";
import { getNewTemplateParams } from "../getNewTemplateParams";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        select: {
            minWidth: 200
        }
    })
);

const TextForm: React.FC<OptionsProps> = ({ site, setSite, componentId, variableId }) => {
    const classes = useStyles();
    const [component, variable] = useOptionsProps(site, componentId, variableId);
    useEffect(() => {
        if (variable) {
            if (variable.templateParameters === undefined) {
                setSite((prev) => getNewTemplateParams(prev, componentId, variableId, { page: "" }));
            }
        }
    }, [site, variable, componentId, variableId]);

    const onStringChange = (event: React.ChangeEvent<{ value: unknown }>, name: string) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, {
                [name]: event.target.value as string,
            })
        );
    };

    return variable?.templateParameters ? (
        <div>
            <FormControl>
                <InputLabel id="page-label">Page</InputLabel>
                <Select
                    className={classes.select}
                    labelId="page-label"
                    id="page"
                    value={variable.templateParameters.page}
                    onChange={(e) => onStringChange(e, "page")}
                >
                    <MenuItem value=""></MenuItem>
                    {site.components
                        .filter((c) => c.templateId === 'page')
                        .map((s) => (
                        <MenuItem key={s.name} value={s.name}>
                            {s.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    ) : null;
};

export default TextForm;
