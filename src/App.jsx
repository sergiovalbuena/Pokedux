import './App.css'
import { Searcher } from './components/Searcher'
import { Col } from 'antd'

import { PokemonList } from './components/PokemonList'

function App() {


  return (

    <div className="app">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>

  )
}

export default App
