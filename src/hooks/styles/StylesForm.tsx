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
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
import { RgbaStringColorPicker } from "react-colorful";
import { useDebouncedCallback } from "use-debounce";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "fit-content",
        },
        input: {
            display: "none",
        },
        background: {
            maxHeight: 350,
            maxWidth: "100%",
            marginBottom: theme.spacing(1),
        },
        btnRemove: {
            marginLeft: theme.spacing(1),
        },
        colorPicker: {
            width: "100%",
            marginTop: theme.spacing(1),
        },
        toggle: {
            marginBottom: theme.spacing(1),
        },
        select: {
            minWidth: 200
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
                        alignment: null,
                        formats: [],
                        background: null,
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        paddingTop: 0,
                        paddingRight: 0,
                        paddingBottom: 0,
                        borderStyle: "none",
                        borderWidth: "1",
                        borderColor: "rgba(255, 255, 255, 0)",
                        color: "rgba(255, 255, 255, 0)",
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
                reader.onerror = (error) => reject(error);
            });
        };
        const result = await toBase64(ref!.current!.files![0]);
        console.log(result);
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { background: result })
        );
    };

    const removeFile = () => {
        ref!.current!.value = "";
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { background: null })
        );
    };
    const debounced = useDebouncedCallback((value: string) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { backgroundColor: value })
        );
    }, 500);

    // box

    const borderDebounced = useDebouncedCallback((value: string) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { borderColor: value })
        );
    }, 500);

    const colorDebounced = useDebouncedCallback((value: string) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { color: value })
        );
    }, 500);

    const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { [name]: event.target.value })
        );
    };
    const onStringChange = (event: React.ChangeEvent<{ value: unknown }>, name: string) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, {
                [name]: event.target.value as string,
            })
        );
    };

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
                    className={classes.toggle}
                    value={variable.templateParameters.formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                >
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
                <RgbaStringColorPicker
                    className={classes.colorPicker}
                    color={variable.templateParameters.color}
                    onChange={colorDebounced}
                />
            </div>
            <div>
                <Typography>Background</Typography>
                {variable.templateParameters.background && (
                    <img
                        className={classes.background}
                        src={variable.templateParameters.background}
                    />
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
                    <Button
                        className={classes.btnRemove}
                        variant="contained"
                        color="secondary"
                        onClick={removeFile}
                    >
                        Remove
                    </Button>
                )}
                <RgbaStringColorPicker
                    className={classes.colorPicker}
                    color={variable.templateParameters.backgroundColor}
                    onChange={debounced}
                />
                <div>
                    <FormControl>
                        <InputLabel id="font-size-label">Size</InputLabel>
                        <Select
                            className={classes.select}
                            labelId="font-size-label"
                            id="font-size"
                            value={variable.templateParameters.fontSize || ''}
                            onChange={(e) => onStringChange(e, "fontSize")}
                        >
                            {["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"].map((s) => (
                                <MenuItem key={s} value={s}>
                                    {s}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div>
                <Typography>Box</Typography>
                <label>Size</label>
                <div>
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "width")
                        }
                        value={variable.templateParameters.width || ""}
                        type="number"
                        id="width"
                        label="Width"
                    />
                </div>
                <div>
                    <FormControl>
                        <InputLabel id="width-unit-label">Unit</InputLabel>
                        <Select
                            className={classes.select}
                            labelId="width-unit-label"
                            id="width-unit"
                            value={variable.templateParameters.widthUnit || 'px'}
                            onChange={(e) => onStringChange(e, "widthUnit")}
                        >
                            {["px", "vw", "vh", "em", "%"].map((s) => (
                                <MenuItem key={s} value={s}>
                                    {s}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "height")
                        }
                        value={variable.templateParameters.height || ""}
                        type="number"
                        id="height"
                        label="Height"
                    />
                </div>
                <div>
                    <FormControl>
                        <InputLabel id="width-unit-label">Unit</InputLabel>
                        <Select
                            className={classes.select}
                            labelId="height-unit-label"
                            id="height-unit"
                            value={variable.templateParameters.heightUnit || 'px'}
                            onChange={(e) => onStringChange(e, "heightUnit")}
                        >
                            {["px", "vw", "vh", "em", "%"].map((s) => (
                                <MenuItem key={s} value={s}>
                                    {s}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <label>Margin</label>
                <div>
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "marginLeft")
                        }
                        value={variable.templateParameters.marginLeft || ""}
                        type="number"
                        id="margin-left"
                        label="Left"
                    />
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "marginTop")
                        }
                        value={variable.templateParameters.marginTop || ""}
                        type="number"
                        id="margin-top"
                        label="Top"
                    />
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "marginRight")
                        }
                        value={variable.templateParameters.marginRight || ""}
                        type="number"
                        id="margin-right"
                        label="Right"
                    />
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "marginBottom")
                        }
                        value={variable.templateParameters.marginBottom || ""}
                        type="number"
                        id="margin-bottom"
                        label="Bottom"
                    />
                </div>
                <label>Padding</label>
                <div>
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "paddingLeft")
                        }
                        value={variable.templateParameters.paddingLeft || ""}
                        type="number"
                        id="padding-left"
                        label="Left"
                    />
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "paddingTop")
                        }
                        value={variable.templateParameters.paddingTop || ""}
                        type="number"
                        id="padding-top"
                        label="Top"
                    />
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "paddingRight")
                        }
                        value={variable.templateParameters.paddingRight || ""}
                        type="number"
                        id="padding-right"
                        label="Right"
                    />
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "paddingBottom")
                        }
                        value={variable.templateParameters.paddingBottom || ""}
                        type="number"
                        id="padding-bottom"
                        label="Bottom"
                    />
                </div>
                <label>Border</label>
                <div>
                    <FormControl>
                        <InputLabel id="border-style-label">Style</InputLabel>
                        <Select
                            className={classes.select}
                            labelId="border-style-label"
                            id="border-style"
                            value={variable.templateParameters.borderStyle}
                            onChange={(e) => onStringChange(e, "borderStyle")}
                        >
                            {[
                                "none",
                                "hidden",
                                "dotted",
                                "dashed",
                                "solid",
                                "double",
                                "groove",
                                "ridge",
                                "inset",
                                "outset",
                            ].map((s) => (
                                <MenuItem key={s} value={s}>
                                    {s}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        type="number"
                        id="border-width"
                        label="Width"
                        value={variable.templateParameters.borderWidth || ""}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onNumberChange(e, "borderWidth")
                        }
                    />
                    <RgbaStringColorPicker
                        className={classes.colorPicker}
                        color={variable.templateParameters.borderColor}
                        onChange={borderDebounced}
                    />
                </div>
            </div>
            <div>
                <Typography>Display</Typography>
                <div>
                    <FormControl>
                        <InputLabel id="display-type-label">Type</InputLabel>
                        <Select
                            className={classes.select}
                            labelId="display-type-label"
                            id="display-type"
                            value={variable.templateParameters.display}
                            onChange={(e) => onStringChange(e, "display")}
                        >
                            {["", "flex", "grid"].map((s) => (
                                <MenuItem key={s} value={s}>
                                    {s}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                {variable.templateParameters.display === "flex" && (
                    <>
                        <div>
                            <FormControl>
                                <InputLabel id="flex-wrap-label">Flex wrap</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="flex-wrap-label"
                                    id="flex-wrap"
                                    value={variable.templateParameters.flexWrap}
                                    onChange={(e) => onStringChange(e, "flexWrap")}
                                >
                                    {[
                                        "",
                                        "wrap",
                                        "nowrap",
                                        "wrap-reverse"
                                    ].map((s) => (
                                        <MenuItem key={s} value={s}>
                                            {s}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl>
                                <InputLabel id="flex-direction-label">Flex direction</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="flex-direction-label"
                                    id="flex-direction"
                                    value={variable.templateParameters.flexDirection}
                                    onChange={(e) => onStringChange(e, "flexDirection")}
                                >
                                    {["", "row", "column"].map((s) => (
                                        <MenuItem key={s} value={s}>
                                            {s}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        </>
                )}
                {variable.templateParameters.display === "grid" && (
                    <>
                        <div>
                            <TextField
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    onNumberChange(e, "gridColumns")
                                }
                                value={variable.templateParameters.gridColumns || ""}
                                type="number"
                                id="grid-columns"
                                label="Columns"
                            />
                            <TextField
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    onNumberChange(e, "gridRows")
                                }
                                value={variable.templateParameters.gridRows || ""}
                                type="number"
                                id="grid-rows"
                                label="Rows"
                            />
                        </div>
                        <div>
                            <FormControl>
                                <InputLabel id="justify-items-label">Justify items</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="justify-items-label"
                                    id="justify-items"
                                    value={variable.templateParameters.justifyItems}
                                    onChange={(e) => onStringChange(e, "justifyItems")}
                                >
                                    {[
                                        "",
                                        "start",
                                        "end",
                                        "center",
                                        "stretch"
                                    ].map((s) => (
                                        <MenuItem key={s} value={s}>
                                            {s}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </>
                )}
                {(variable.templateParameters.display === "flex" || variable.templateParameters.display === "grid") && (
                    <>
                        <div>
                            <FormControl>
                                <InputLabel id="justify-content-label">Justify content</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="justify-content-label"
                                    id="justify-content"
                                    value={variable.templateParameters.justifyContent}
                                    onChange={(e) => onStringChange(e, "justifyContent")}
                                >
                                    {[
                                        "",
                                        "start",
                                        "end",
                                        "center",
                                        "space-between",
                                        "space-around",
                                    ].map((s) => (
                                        <MenuItem key={s} value={s}>
                                            {s}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl>
                                <InputLabel id="alignContent-label">Align content</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="alignContent-label"
                                    id="alignContent"
                                    value={variable.templateParameters.alignContent}
                                    onChange={(e) => onStringChange(e, "alignContent")}
                                >
                                    {[
                                        "",
                                        "normal",
                                        "start",
                                        "end",
                                        "center",
                                        "space-between",
                                        "space-around",
                                        "stretch",
                                    ].map((s) => (
                                        <MenuItem key={s} value={s}>
                                            {s}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl>
                                <InputLabel id="alignItems-label">Align items</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="alignItems-label"
                                    id="alignItems"
                                    value={variable.templateParameters.alignItems}
                                    onChange={(e) => onStringChange(e, "alignItems")}
                                >
                                    {["", "start", "end", "center", "stretch", "baseline"].map(
                                        (s) => (
                                            <MenuItem key={s} value={s}>
                                                {s}
                                            </MenuItem>
                                        )
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                    </>
                )}
            </div>
        </>
    ) : null;
};

export default StylesForm;
