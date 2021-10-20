import {compose} from "redux";
import {connect} from "react-redux";
import {deleteDrug, setAmount} from "../../redux/reducers/cart-reducer";
import {Cart} from "./Cart";

let mapStateToProps = (state) => {
    return {
        cartDrugs: state.cartPage.drugs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteDrug: (drug) => {
            dispatch(deleteDrug(drug))
        },
        setAmount: (drug, value) => {
            dispatch(setAmount(drug, value))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)(Cart));