const ShopCard = (props)  => {
    const { name, price, color, img } = props;

    return (
        <li className="shopCard">
            <h1>{name}</h1>
            <p>{color}</p>
            <img src={img} alt={name} />
            <div className="add-cart">
                <span>{"$" + price}</span>
                <button>ADD TO CART</button>
            </div>
        </li>  
    );
};

export default ShopCard