import {TableCell, TableRow} from "@mui/material";

const Drug = (props) => {

    return (
        props.availableVolumes.map(volume => {
            return <TableRow key={props.id + volume.liters}>
                <TableCell>{props.name}</TableCell>
                <TableCell>{volume.liters}</TableCell>
                <TableCell>{volume.priceRub}</TableCell>
                <TableCell>{props.category}</TableCell>
                <TableCell><button onClick={() => {
                    let newDrug = {
                        id: props.id + volume.liters,
                        name: props.name,
                        liter: volume.liters,
                        price: volume.priceRub,
                        amount: 1
                    }
                    props.addDrug(newDrug)
                }}>Add</button></TableCell>
            </TableRow>
        })
    );
}

export default Drug;