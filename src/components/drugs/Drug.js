import {Button, TableCell, TableRow} from "@mui/material";

const Drug = (props) => {

    return (
        <TableRow key={props.key}>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.liters}</TableCell>
            <TableCell>{props.priceRub}</TableCell>
            <TableCell>{props.categories.map(category => {return <span>{category}, </span>})}</TableCell>
            <TableCell><Button variant='contained' onClick={() => {
                let newDrug = {
                    id: props.id,
                    name: props.name,
                    liters: props.liters,
                    price: props.priceRub * 100,
                    amount: 1
                }
                props.addDrug(newDrug)
            }}>Add</Button></TableCell>
        </TableRow>
    );
}

export default Drug;