import React, {useState} from "react";
import Drug from "./Drug";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {CircularProgress} from "@mui/material";
import useDrugs from "../../hooks/useDrugs";
import {useSearch} from "../../store";
import last from '../../common/left-arrow.png'
import next from '../../common/next.png'

const Drugs = (props) => {

    const searchText = useSearch(state => state.searchText)
    const [page, setPage] = useState(0);
    let {status, data, error} = useDrugs(searchText, page)

    let drugs = data?.map(d => <Drug key={d.id} id={d.id} name={d.name} liters={d.liters} priceRub={d.priceRub}
                                     categories={d.categories} addDrug={props.addDrug}/>)

    return (
        <div>
            {status === 'loading' ? <CircularProgress/> :
                status === 'error' ? <div>Error: {error.message}</div> :
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
            }
            <Button
                variant='outlined'
                onClick={() => setPage(old => Math.max(old - 1, 0))}
                disabled={page === 0}
            >
                <img src={last} />
            </Button>
            {page + 1}
            <Button
                variant='outlined'
                onClick={() => {
                    setPage(old => old + 1)
                }}
                disabled={page === 2}
            >
                <img src={next}/>
            </Button>
        </div>
    )

}

export default Drugs;