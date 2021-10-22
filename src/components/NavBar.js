import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";


export default function NavBar() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" color='inherit' sx={{mr: 2}}>DrugSearcher</Typography>
                <Link href='/cart' color='inherit' underline='none' sx={{mr: 2}}>Cart</Link>
                <Link href='/catalogue' color='inherit' underline='none'>Catalogue</Link>
            </Toolbar>
        </AppBar>
    );
}
