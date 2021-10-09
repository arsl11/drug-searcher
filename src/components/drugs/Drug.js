const Drug = (props) => {
    return (
        <div className='drug'>
            {props.availableVolumes.map(volume => {
                return <div>
                    <span>{props.name}, </span>
                    <span>{volume.liters}, </span>
                    <span>{volume.priceRub}, </span>
                    <span>{props.category}</span>
                </div>
            })}
        </div>
    );
}

export default Drug;