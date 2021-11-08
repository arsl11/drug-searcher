import Drug from "./Drug";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import useDrugs from "../../hooks/useDrugs";
import {useSearch} from "../../store";
import {useState} from "react";

const Drugs = (props) => {

    const searchText = useSearch(state => state.searchText)

    const [page, setPage] = useState(1);

    let {data,} = useDrugs(searchText, page)

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
            <div className='pagination'>
                <Button variant='outlined' sx={{mt: 2}} onClick={() => setPage(1)}>1</Button>
                <Button variant='outlined' sx={{mt: 2}} onClick={() => setPage(2)}>2</Button>
            </div>
        </div>
    )

}

export default Drugs;