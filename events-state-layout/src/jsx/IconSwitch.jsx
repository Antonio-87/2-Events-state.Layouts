const IconSwitch = (props) => {
    const { icon, onSwitch} = props;

    return (
        <div className={icon === "view_list"
            ? "viewList icon"
            : "viewModule icon"}
            onClick={onSwitch}
        ></div>
    );
};

export default IconSwitch