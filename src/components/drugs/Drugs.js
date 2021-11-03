import Drug from "./Drug";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import useDrugs from "../../hooks/useDrugs";
import {useSearch} from "../../store";

const Drugs = (props) => {

    const searchText = useSearch(state => state.searchText)

    let {data,} = useDrugs(searchText)

    let drugs = data?.map(d => <Drug key={d.id} id={d.id} name={d.name} liters={d.liters} priceRub={d.priceRub} categories={d.categories} addDrug={props.addDrug} />)

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