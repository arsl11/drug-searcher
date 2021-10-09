import Drugs from "./Drugs";
import {compose} from "redux";
import {connect} from "react-redux";
import {getDrugs} from "../../redux/selectors/drugs-selector";

let mapStateToProps = (state) => {
    return {
        drugs: getDrugs(state)
    }
}

export default compose(
    connect(mapStateToProps, {}))(Drugs);