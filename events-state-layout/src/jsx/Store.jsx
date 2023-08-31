import { useState } from "react";
import products from "../assets/products";
import IconSwitch from "./IconSwitch";
import CardsView from "./cardsView";

const Store = () => {
    const productsList = products;
    const [icon, setIcon] = useState("view_list")

    const onSwitch = () => {
        setIcon("view_module");
    };

    return (
        <>
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            <CardsView cards={productsList} />
        </>
        
    );
};

export default Store