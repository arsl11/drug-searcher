export const Cart = (props) => {

    let sum = 0

    for (let i = 0; i < props.cartDrugs.length; i++) {
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
            <div>
                {props.cartDrugs.map(drug => {
                    return <div>
                        {drug.name}, {drug.price}, {drug.liter}
                        <button onClick={() => {props.setAmount(drug, drug.amount + 1)}}>+</button>{drug.amount}
                        {   drug.amount > 0 ?
                            <button onClick={() => {props.setAmount(drug, drug.amount - 1)}}>-</button> : null
                        }
                        <button onClick={() => {props.deleteDrug(drug)}}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}