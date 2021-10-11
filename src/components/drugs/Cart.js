export const Cart = (props) => {

    let sum = 0

    for (let i = 0; i < props.cartDrugs.length; i++){
        sum += props.cartDrugs[i].price
    }


    return (
        <div>
            <div>
                {sum}
            </div>
            <div>
                {props.cartDrugs.length}
            </div>
        </div>
    )
}