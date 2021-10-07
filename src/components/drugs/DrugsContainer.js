import Drugs from "./Drugs";
import {compose} from "redux";
import {connect} from "react-redux";
import {getDrugsByLiter} from "../../redux/selectors/drugs-selector";

let mapStateToProps = (state) => {
    return {
        drugs: getDrugsByLiter(state)
    }
}

export default compose(
    connect(mapStateToProps, {}))(Drugs);