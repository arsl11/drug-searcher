import Drug from "./Drug";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const Drugs = (props) => {

    let inputDrugName = props.formState.inputDrugName

    let filteredDrugs = props.drugs.filter(drug => {
        return drug.name.toLowerCase().includes(inputDrugName.toLowerCase())
    })

    let drugs = filteredDrugs.map(d => <Drug key={d.id} id={d.id} name={d.name} liters={d.liters} priceRub={d.priceRub} categories={d.categories} addDrug={props.addDrug} />)

    return (
        <div>
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