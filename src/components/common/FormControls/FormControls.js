import {TextField} from "@mui/material";

export const Input = (props) => {
    const {input} = props
    return <TextField {...props} {...input} variant="standard" sx={{mr: 3}}/>
}

