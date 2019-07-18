import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      stats: [
        {
          name: 'hp',
          value: ''
        }
      ],
      sprites:{
        front: '',
        back: ''
      }
    }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={()=>this.props.handleSubmit(this.state)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => this.setState({ name:e.target.value })}/>
            <Form.Input fluid type="number" label="hp" placeholder="hp" name="hp" onChange={(e) => this.setState({ stats:[ {name: 'hp', value: e.target.value} ]})}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e) => this.setState({ sprites:{ front: e.target.value, back: this.state.sprites.back } })}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={(e) => this.setState({ sprites:{ front: this.state.sprites.front, back: e.target.value } })}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
