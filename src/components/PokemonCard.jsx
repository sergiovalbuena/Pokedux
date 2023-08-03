import { StarOutlined } from "@ant-design/icons"
import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import './PokemonList.css';

export const PokemonCard = ({ name, image, height, weight }) => {
    return (
        <Card

            title={name}
            cover={
                <img
                    src={image}
                    alt={name}
                />
            }
            extra={<StarOutlined />}
        >
            <Meta description="Fire, magic" />
            <Meta description={height} />
            <Meta description={weight} />
        </Card>
    )
}


