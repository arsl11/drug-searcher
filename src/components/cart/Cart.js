import {Button, Paper, Table, TableCell, TableContainer, TableRow} from "@mui/material";
import {useCart} from "../../store";

export const Cart = (props) => {

    const {cartDrugs, setAmount, deleteDrug} = useCart()

    let sum = 0
    let count = 0

    for (let i = 0; i < cartDrugs.length; i++) {
        sum += cartDrugs[i].price * cartDrugs[i].amount
        count += cartDrugs[i].amount
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <div>
                    <div className='cartDrugs'>
                        {cartDrugs.map(drug => {
                            return <TableRow>
                                <TableCell>{drug.name}</TableCell>
                                <TableCell>{drug.price * drug.amount / 100}&nbsp;Rub.</TableCell>
                                <TableCell>{drug.liters}&nbsp;l.</TableCell>
                                <TableCell>
                                    <Button variant='text' onClick={() => {
                                        setAmount(drug.id, drug.amount + 1)
                                    }}>+
                                    </Button>
                                    {drug.amount}
                                    <Button disabled={drug.amount <= 1} variant='text' onClick={() => {
                                        setAmount(drug.id, drug.amount - 1)
                                    }}>-</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant='contained' onClick={() => {
                                        deleteDrug(drug.id)
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