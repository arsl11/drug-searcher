import Drugs from "./Drugs";
import {compose} from "redux";
import {connect} from "react-redux";
import {getDrugs} from "../../redux/selectors/drugs-selector";
import {addDrug} from "../../redux/reducers/cart-reducer";
import {getFormValues} from 'redux-form';

let mapStateToProps = (state) => {

    return {
        drugs: getDrugs(state),
        formState: getFormValues('searchDrugForm')(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addDrug: (drug) => {
            dispatch(addDrug(drug))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)(Drugs));