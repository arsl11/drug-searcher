import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {CircularProgress, Link} from "@mui/material";
import {Field, getFormValues, reduxForm} from "redux-form";
import {Input} from "./common/FormControls/FormControls";
import {withRouter} from "react-router-dom";
import useDrugs from "../hooks/useDrugs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        formState: getFormValues('searchDrugForm')(state)
    }
}

const SearchForm = (props) => {

    let inputDrugName = props.formState?.inputDrugName
    let {isFetching} = useDrugs(inputDrugName)

    return (
        <div>
            <form onChange={props.change}>
                <Field component={Input} placeholder={'Search...'} name='inputDrugName' />
                {isFetching && <CircularProgress color="secondary"/>}
            </form>
        </div>
    );
}

const SearchDrugForm = reduxForm({form: 'searchDrugForm', initialValues: {inputDrugName: '',},})(SearchForm)

const ConnectedSearchDrugForm = connect(mapStateToProps, {})(SearchDrugForm)



const NavBar = (props) => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" color='inherit' sx={{mr: 2}}>DrugSearcher</Typography>
                {props.location.pathname === '/catalogue' &&
                    <ConnectedSearchDrugForm />
                }
                <Link href='/catalogue' color='inherit' underline='none' sx={{mr: 2}}>Catalogue</Link>
                <Link href='/cart' color='inherit' underline='none' sx={{mr: 2}}>Cart</Link>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(NavBar)
