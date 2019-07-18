import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.debouncer = _.debounce(this.searchSubmit, 500)
  }

  state={
    query: "",
    pokemons: []
  }

  render() {
    let pokemon = this.state.pokemons.filter( (pokemon)=>{
      let hp = (pokemon.stats.find((eachStat)=> eachStat.name==="hp"))
      return pokemon.name.includes(this.state.query) || ( parseInt(hp.value,10) >= parseInt(this.state.query,10) )
    })
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search placeholder="Seach by Name or HP" onSearchChange={e => {
          let value = e.target.value
          this.debouncer(value)
        }} showNoResults={false} />
        <br />
        <PokemonCollection query={this.state.query} pokemons={pokemon}  />
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then( data => this.setState({ pokemons: data }) )
  }

  searchSubmit = (query) => {
    this.setState({ query })
  }


  handleSubmit = (values) => {
    fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify( values )
    })
    .then(res => res.json())
    .then(newPokemon => this.setState({ pokemons: [...this.state.pokemons,newPokemon] }) )
  }

}

export default PokemonPage
