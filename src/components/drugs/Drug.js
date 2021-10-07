const Drug = (props) => {
    return (
        <div className='drug'>
            <span className='name'>{props.name},</span>
            <span className='liter'>{props.liter},</span>
            <span className='price'>{props.price},</span>
            <span className='category'>{props.category}</span>
        </div>
    );
}

export default Drug;