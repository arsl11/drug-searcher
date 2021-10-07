import Drug from "./Drug";

const Drugs = (props) => {

    debugger;

    let drugs = props.drugs.map( d => <Drug key={d.id} id={d.id}
                                            name={d.name}
                                            liter={d.availableVolumes[0].liters}
                                            price={d.availableVolumes[0].priceRub}
                                            category={d.categories}/>)

    return (
        <div className='drugs'>
            {drugs}
        </div>
    );
}

export default Drugs;