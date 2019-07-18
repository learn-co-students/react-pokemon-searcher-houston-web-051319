import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    imageFront: true 
  }


  render() {
    const {name,stats,sprites} = this.props.pokemon
    let hp = (stats.find((eachStat)=> eachStat.name==="hp"))

    return (
      <Card>
        <div onClick={()=> this.setState({ imageFront: !this.state.imageFront })}>
          <div className="image">
            <img src={this.state.imageFront ? sprites.front : sprites.back } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value} {hp.name}
            </span>
          </div>
        </div>
      </Card>
    )
  }

}

export default PokemonCard
