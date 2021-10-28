import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {CircularProgress, Link, TextField} from "@mui/material";
import {withRouter} from "react-router";
import useStore from "../store";
import useDrugs from "../hooks/useDrugs";

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const NavBar = (props) => {

    const searchText = useStore(state => state.searchText)
    const {isFetching} = useDrugs(searchText)
    const setSearchText = useStore(state => state.setSearchText)

    let handleChange = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" color='inherit' sx={{mr: 2}}>DrugSearcher</Typography>
                <Link href='/catalogue' color='inherit' underline='none' sx={{mr: 2}}>Catalogue</Link>
                <Link href='/cart' color='inherit' underline='none' sx={{mr: 2}}>Cart</Link>
                {props.location.pathname === '/catalogue' &&
                    <form onChange={debounce(handleChange)}>
                        <TextField placeholder='Search...' defaultValue='' variant='standard' sx={{mr: 2}} />
                    </form>
                }
                {isFetching && <CircularProgress color='secondary'/>}
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(NavBar)
