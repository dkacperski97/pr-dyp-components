import React, { useEffect, useRef } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { OptionsProps } from "../../types/props";
import TextField from "@material-ui/core/TextField";
import { useOptionsProps } from "../useOptionsProps";
import { getNewTemplateParams } from "../getNewTemplateParams";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatStrikethroughIcon from "@material-ui/icons/FormatStrikethrough";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from "@material-ui/core/Typography";
import { RgbaStringColorPicker } from "react-colorful";
import { useDebouncedCallback } from 'use-debounce';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "fit-content",
        },
        input: {
          display: 'none',
        },
        background: {
            maxHeight: 350,
            maxWidth: "100%",
            marginBottom: theme.spacing(1)
        },
        btnRemove: {
            marginLeft: theme.spacing(1)
        },
        colorPicker: {
            width: "100%",
            marginTop: theme.spacing(1)
        },
        toggle: {
            marginBottom: theme.spacing(1)
        }
    })
);

const StylesForm: React.FC<OptionsProps> = ({ site, setSite, componentId, variableId }) => {
    const classes = useStyles();
    const ref = useRef<HTMLInputElement>(null);
    const [component, variable] = useOptionsProps(site, componentId, variableId);
    useEffect(() => {
        if (variable) {
            if (variable.templateParameters === undefined) {
                setSite((prev) =>
                    getNewTemplateParams(prev, componentId, variableId, { 
                        alignment: null, formats: [], background: null, backgroundColor: '#fff',
                        marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0, 
                        paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, 
                        borderStyle: 'none', borderWidth: '1', borderColor: '#fff'
                    })
                );
            }
        }
    }, [site, variable, componentId, variableId]);

    // text

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { alignment: newValue })
        );
    };

    const handleFormat = (event: React.MouseEvent<HTMLElement>, newValues: string[] | null) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { formats: newValues })
        );
    };

    // background

    const changeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const toBase64 = (file: File) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            }
        )};
        const result = await toBase64(ref!.current!.files![0])
        console.log(result)
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { background: result })
        );
    }

    const removeFile = () => {
        ref!.current!.value = '';
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { background: null })
        );
    }
    const debounced = useDebouncedCallback(
        (value: string) => {
            setSite((prev) =>
                getNewTemplateParams(prev, componentId, variableId, { backgroundColor: value })
            );
        }, 500);

    // box

    const borderDebounced = useDebouncedCallback(
        (value: string) => {
            setSite((prev) =>
                getNewTemplateParams(prev, componentId, variableId, { borderColor: value })
            );
        }, 500);

    const borderStyleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { borderStyle: event.target.value as string })
        );
    }
    const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { [name]: event.target.value })
        );
    }

    return variable?.templateParameters ? (
        <>
            <div>
                <Typography>Text</Typography>
                <ToggleButtonGroup
                    className={classes.toggle}
                    value={variable.templateParameters.alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified">
                        <FormatAlignJustifyIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                    className={classes.toggle} value={variable.templateParameters.formats} onChange={handleFormat} aria-label="text formatting">
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                    <ToggleButton value="line-through" aria-label="line-through">
                        <FormatStrikethroughIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                <Typography>Background</Typography>
                {variable.templateParameters.background && (
                    <img className={classes.background} src={variable.templateParameters.background} />
                )}
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    ref={ref}
                    onChange={changeFile}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Upload image
                    </Button>
                </label>
                {variable.templateParameters.background && (
                <Button className={classes.btnRemove} variant="contained" color="secondary" onClick={removeFile}>
                Remove
                </Button>
                )}
                <RgbaStringColorPicker className={classes.colorPicker} color={variable.templateParameters.backgroundColor} onChange={debounced} />
            </div>
            <div>
                <Typography>Box</Typography>
                <label>Margin</label>
                <div>
                    <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNumberChange(e, 'marginLeft')} type="number" id="margin-left" label="Left" />
                    <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNumberChange(e, 'marginTop')} type="number" id="margin-top" label="Top" />
                    <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNumberChange(e, 'marginRight')} type="number" id="margin-right" label="Right" />
                    <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNumberChange(e, 'marginBottom')} type="number" id="margin-bottom" label="Bottom" />
                </div>
                <label>Padding</label>
                <div>
                    <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNumberChange(e, 'paddingLeft')} type="number" id="padding-left" label="Left" />
                    <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNumberChange(e, 'paddingTop')} type="number" id="padding-top" label="Top" />
                    <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNumberChange(e, 'paddingRight')} type="number" id="padding-right" label="Right" />
                    <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNumberChange(e, 'paddingBottom')} type="number" id="padding-bottom" label="Bottom" />
                </div>
                <label>Border</label>
                <div>
                    <FormControl>
                        <InputLabel id="border-style-label">Style</InputLabel>
                        <Select
                        labelId="border-style-label"
                        id="border-style"
                        value={variable.templateParameters.borderStyle}
                        onChange={borderStyleChange}
                        >
                            {['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'].map(s => (
                                <MenuItem key={s} value={s}>{s}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField type="number" id="border-width" label="Width" value={variable.templateParameters.borderWidth} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNumberChange(e, 'borderWidth')} />
                    <RgbaStringColorPicker className={classes.colorPicker} color={variable.templateParameters.borderColor} onChange={borderDebounced} />
                </div>

            </div>
        </>
    ) : null;
};

export default StylesForm;
