import Drugs from "./Drugs";
import {compose} from "redux";
import {connect} from "react-redux";
import {getDrugs} from "../../redux/selectors/drugs-selector";
import {addDrugActionCreator} from "../../redux/reducers/cart-reducer";

let mapStateToProps = (state) => {
    return {
        drugs: getDrugs(state),
        cartDrugs: state.cartPage.drugs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addDrug: (drug) => {
            dispatch(addDrugActionCreator(drug))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps))(Drugs);