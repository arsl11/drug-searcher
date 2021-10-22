import {Button, Paper, Table, TableCell, TableContainer, TableRow} from "@mui/material";

export const Cart = (props) => {

    let sum = 0
    let count = 0

    for (let i = 0; i < props.cartDrugs.length; i++) {
        sum += props.cartDrugs[i].price * props.cartDrugs[i].amount
        count += props.cartDrugs[i].amount
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <div>
                    <div className='cartDrugs'>
                        {props.cartDrugs.map(drug => {
                            return <TableRow>
                                <TableCell>{drug.name}</TableCell>
                                <TableCell>{drug.price * drug.amount / 100}&nbsp;Rub.</TableCell>
                                <TableCell>{drug.liter}&nbsp;l.</TableCell>
                                <TableCell>
                                    <Button variant='text' onClick={() => {
                                        props.setAmount(drug, drug.amount + 1)
                                    }}>+
                                    </Button>
                                    {drug.amount}
                                    <Button disabled={drug.amount <= 1} variant='text' onClick={() => {
                                        props.setAmount(drug, drug.amount - 1)
                                    }}>-</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant='contained' onClick={() => {
                                        props.deleteDrug(drug)
                                    }}>Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        })}
                    </div>
                    <TableCell>
                        <div className='sum'>
                            Total sum: {sum / 100}&nbsp;Rub.
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className='count'>
                            Total amount: {count}
                        </div>
                    </TableCell>
                </div>
            </Table>
        </TableContainer>
    )
}