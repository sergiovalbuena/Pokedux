
import { useDispatch } from "react-redux";
import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import './PokemonList.css';
import StarButton from "./StarButton";
import { setFavorite } from "../actions";

export const PokemonCard = ({ name, image, height, weight, types, id, favorite }) => {
    const dispatch = useDispatch()

    const typesString = types.map((elem) => elem.type.name).join(', ')

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }


    return (
        <Card

            title={name}
            cover={
                <img
                    src={image}
                    alt={name}
                />
            }
            extra={<StarButton isFav={favorite} onClick={handleOnFavorite} />}
        >
            <Meta description={typesString} />
            <Meta description={height} />
            <Meta description={weight} />
        </Card>
    )
}


