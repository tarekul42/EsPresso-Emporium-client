

const CoffeeCard = ({coffee}) => {

    const { name, photo } = coffee;

    return (
        <div>
            <div>
                <div><img src={photo} alt="" /></div>
                <div>{name}</div>
                <div>button will be here</div>
            </div>
        </div>
    );
};

export default CoffeeCard;