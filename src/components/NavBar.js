import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {CircularProgress, Link, TextField} from "@mui/material";
import {withRouter} from "react-router";
import {useSearch} from "../store";
import useDrugs from "../hooks/useDrugs";
import {useCallback} from "react";

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const NavBar = (props) => {

    const {searchText, setSearchText} = useSearch()
    const {isFetching} = useDrugs(searchText)

    let handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const debounceText = useCallback(
        debounce(handleChange, 500), []
    )

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" color='inherit' sx={{mr: 2}}>DrugSearcher</Typography>
                <Link href='/catalogue' color='inherit' underline='none' sx={{mr: 2}}>Catalogue</Link>
                <Link href='/cart' color='inherit' underline='none' sx={{mr: 2}}>Cart</Link>
                {props.location.pathname === '/catalogue' &&
                    <form onChange={debounceText}>
                        <TextField placeholder='Search...' defaultValue='' variant='standard' sx={{mr: 2}} />
                    </form>
                }
                {isFetching && <CircularProgress color='secondary'/>}
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(NavBar)
