import Drug from "./Drug";

const Drugs = (props) => {

    let drugs = props.drugs.map( d => <Drug key={d.id} id={d.id}
                                            name={d.name}
                                            liter={d.liter}
                                            price={d.price}
                                            category={d.category}/>)

    return (
        <div className='drugs'>
            {drugs}
        </div>
    );
}

export default Drugs;