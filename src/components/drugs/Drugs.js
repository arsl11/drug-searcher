import Drug from "./Drug";
import {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


const SearchForm = (props) => {
    return (
        <div>
            <form onChange={props.change}>
                <Field component={Input} placeholder={'Search...'} name='inputDrugName'/>
            </form>
        </div>
    );
}

const SearchDrugForm = reduxForm({form: 'searchDrugForm'})(SearchForm)

const Drugs = (props) => {

    let [value, setValue] = useState('')

    let filteredDrugs = props.drugs.filter(drug => {
        if (value == undefined) {
            value = ''
        }
        return drug.name.toLowerCase().includes(value.toLowerCase())
    })

    let drugs = filteredDrugs.map(d => <Drug key={d.id} id={d.id}
                                             name={d.name}
                                             availableVolumes={d.availableVolumes}
                                             category={d.categories}/>)

    return (
        <div>
            <SearchDrugForm onChange={(values) => setValue(values.inputDrugName)}/>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Liters&nbsp;(l)</TableCell>
                            <TableCell>Price&nbsp;(Rub)</TableCell>
                            <TableCell>Categories</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{drugs}</TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}

export default Drugs;