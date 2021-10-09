import Drug from "./Drug";
import {useState} from "react";


const Drugs = (props) => {

    let [value, setValue] = useState('')

    let filteredDrugs = props.drugs.filter(drug => {
        return drug.name.toLowerCase().includes(value.toLowerCase())
    })

    let drugs = filteredDrugs.map( d => <Drug key={d.id} id={d.id}
                                            name={d.name}
                                            availableVolumes={d.availableVolumes}
                                            category={d.categories}/>)

    return (
        <div>
            <form onChange={(e) => setValue(e.target.value)}>
                <input placeholder='Search...'/>
            </form>
            <div className='drugs'>
                {drugs}
            </div>
        </div>
    );
}

export default Drugs;