import ShopItem from "./ShopItem";

const ListView = (props) => {
    const { items } = props;

    return (
        <ul className="listView">
            {items.map((item, i) => (
                <ShopItem key={i} {...item} />
            ))}
        </ul>
    );
}

export default ListView