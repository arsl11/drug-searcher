import Drugs from "./Drugs";
import {compose} from "redux";
import {connect} from "react-redux";
import {getDrugs} from "../../redux/selectors/drugs-selector";
import {addDrug, deleteDrug, setAmount} from "../../redux/reducers/cart-reducer";

let mapStateToProps = (state) => {
    return {
        drugs: getDrugs(state)
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