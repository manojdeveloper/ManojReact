import './StoreCard.scss';

let StoreCard = (props) => {
    //console.log(props);
    //let {id, category, description, image, price, rating, title} = props.carddata;
    //console.log(category);

    // let {carddata, a1, ...others} = props;
    // console.log(others);

    return (
        <div className='productBox'>
            <div className="procudtImg"><img src={props.carddata.image} /></div>
            <h3>{props.carddata.title}</h3>
            <h5>Category : {props.carddata.category}</h5>
            <div style={{margin:"10px 0", fontSize:"14px"}} className="productDes">{props.carddata.description}</div>
            <div className="productPrice"><span className={`defaultclass ${props.carddata.price > 100 ? "mehnga" : "sasta"}`}>{props.carddata.price}</span></div>
            {props.children}
        </div>
    )
}

export default StoreCard;