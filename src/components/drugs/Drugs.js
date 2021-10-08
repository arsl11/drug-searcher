import Drug from "./Drug";
import {Field, reduxForm} from "redux-form";
import {useState} from "react";

const SearchForm = (props) => {
    return (
        <div>
            <form onChange={props.change}>
                <Field component='input' name='inputDrugName' placeholder='Search...' />
            </form>
        </div>
    );
}

export const SearchDrugForm = reduxForm({form: 'searchDrugForm'})(SearchForm);

const Drugs = (props) => {

    let [value, setValue] = useState('');

    let filteredDrugs = props.drugs.filter(drug => {
        if (value == undefined){
            value = ''
        }
        return drug.name.toLowerCase().includes(value.toLowerCase());
    })

    let drugs = filteredDrugs.map( d => <Drug key={d.id} id={d.id}
                                            name={d.name}
                                            liter={d.liter}
                                            price={d.price}
                                            category={d.category}/>)

    return (
        <div className='drugs'>
            <SearchDrugForm onChange={(values) => setValue(values.inputDrugName)}/>
            {drugs}
        </div>
    );
}

export default Drugs;