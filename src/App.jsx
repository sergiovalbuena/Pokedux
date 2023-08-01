import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Col } from 'antd'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import logo from './statics/logo.svg'
import './App.css'
import { setPokemons as setPokemonsActions } from './actions'
import { getPokemon } from './api'


function App({ pokemons, setPokemons }) {

  //const [pokemons, setPokemons] = useState([])
  console.log("pokemons", pokemons)

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };
    fetchPokemons();
  }, [])

  return (

    <div className="app">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>

  )
}


// recibe el estado y returna el objeto que va a ser enviado a los props del componente de redux
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})


//recibe el diosacther y returna el objeto que va a ser enviado a los props del componente de redux
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
