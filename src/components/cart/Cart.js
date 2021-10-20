export const Cart = (props) => {

    let sum = 0
    let count = 0

    for (let i = 0; i < props.cartDrugs.length; i++) {
        sum += props.cartDrugs[i].price * props.cartDrugs[i].amount
        count += props.cartDrugs[i].amount
    }



    return (
        <div>
            <div className='sum'>
                {sum / 100}
            </div>
            <div className='count'>
                {count}
            </div>
            <div className='cartDrugs'>
                {props.cartDrugs.map(drug => {
                    return <div>
                        {drug.name}, {drug.price * drug.amount / 100}, {drug.liter}
                        <button onClick={() => {props.setAmount(drug, drug.amount + 1)}}>+</button>{drug.amount}
                        {   drug.amount > 1 ?
                            <button onClick={() => {props.setAmount(drug, drug.amount - 1)}}>-</button> : null
                        }
                        <button onClick={() => {props.deleteDrug(drug)}}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}