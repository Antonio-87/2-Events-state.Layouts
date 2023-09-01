import ShopCard from "./ShopCard";

const CardsView = (props) => {
    const { cards } = props;

    return (
        <ul className="cardsView">
            {cards.map((card, i) => (
                <ShopCard key={i} {...card} />
            ))}
        </ul>
    );
}

export default CardsView