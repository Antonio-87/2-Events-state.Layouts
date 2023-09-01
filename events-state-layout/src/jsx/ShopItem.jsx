const ShopItem = (props)  => {
    const { name, price, color, img } = props;

    return (
        <li className="shopItem">
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <p>{color}</p>
            <span>{"$" + price}</span>
            <button>ADD TO CART</button>
        </li>  
    );
};

export default ShopItem