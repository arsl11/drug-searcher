import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "@mui/material";


export default function NavBar() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Link href='/catalogue' sx={{flexGrow: 1}}>
                    <Typography variant="h6" component="div" color='white'>
                        DrugSearcher
                    </Typography>
                </Link>
                <Link href='/cart'><Typography color='white'><ShoppingCartIcon/></Typography></Link>
            </Toolbar>
        </AppBar>
    );
}
