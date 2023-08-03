import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Spin } from 'antd'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { getPokemon } from './api'
import { getPokemonsWithDetails, setLoading } from './actions'
import logo from './statics/logo.svg'
import './App.css'


function App() {

  const pokemons = useSelector((state) => state.pokemons)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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

      {loading ?
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
        :
        <PokemonList pokemons={pokemons} />
      }
    </div>

  )
}



export default App;
