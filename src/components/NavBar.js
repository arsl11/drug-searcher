import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";
import {Field, reduxForm} from "redux-form";
import {Input} from "./common/FormControls/FormControls";
import {withRouter} from "react-router-dom";

const SearchForm = (props) => {
    return (
        <div>
            <form onChange={props.change}>
                <Field component={Input} placeholder={'Search...'} name='inputDrugName'/>
            </form>
        </div>
    );
}

const SearchDrugForm = reduxForm({form: 'searchDrugForm', initialValues: {inputDrugName: '',},})(SearchForm)

const NavBar = (props) => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" color='inherit' sx={{mr: 2}}>DrugSearcher</Typography>
                {props.location.pathname === '/catalogue' &&
                    <SearchDrugForm/>
                }
                <Link href='/catalogue' color='inherit' underline='none' sx={{mr: 2}}>Catalogue</Link>
                <Link href='/cart' color='inherit' underline='none' sx={{mr: 2}}>Cart</Link>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(NavBar)
