import {TableCell, TableRow} from "@mui/material";

const Drug = (props) => {
    return (
        props.availableVolumes.map(volume => {
            return <TableRow key={props.id}>
                <TableCell>{props.name}</TableCell>
                <TableCell>{volume.liters}</TableCell>
                <TableCell>{volume.priceRub}</TableCell>
                <TableCell>{props.category}</TableCell>
            </TableRow>
        })
    );
}

export default Drug;