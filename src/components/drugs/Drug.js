import {Button, TableCell, TableRow} from "@mui/material";

const Drug = (props) => {

    return (
        props.availableVolumes.map(volume => {
            return <TableRow key={props.id + volume.liters}>
                <TableCell>{props.name}</TableCell>
                <TableCell>{volume.liters}</TableCell>
                <TableCell>{volume.priceRub}</TableCell>
                <TableCell>{props.category}</TableCell>
                <TableCell><Button variant='contained' onClick={() => {
                    let newDrug = {
                        id: props.id + volume.liters,
                        name: props.name,
                        liter: volume.liters,
                        price: volume.priceRub * 100,
                        amount: 1
                    }
                    props.addDrug(newDrug)
                }}>Add</Button></TableCell>
            </TableRow>
        })
    );
}

export default Drug;