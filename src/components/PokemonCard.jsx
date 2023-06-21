import { StarOutlined } from "@ant-design/icons"
import { Card } from "antd"
import Meta from "antd/es/card/Meta"

export const PokemonCard = () => {
    return (
        <Card

            title="Ditto"
            cover={<img src='https://raw.githubusercontent.com/PokeAPI/spites/master/sprites/pokemon/shiny/132.png' alt='Ditto_pokemon' />}
            extra={<StarOutlined />}
        >
            <Meta description="Fire, magic" />
        </Card>
    )
}


