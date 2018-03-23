import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import AgeStats from './AgeStats'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newDate: '',
      birthday: '1990-01-01',
      showStats: false
    }
  }

  changeBirthday() {
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    })
  }

  render() {
    return (
      <div className="App">
        <Form inline={true}>
          <h2>Input Your Birthday!</h2>
          <FormControl
            type="date"
            onChange={event =>
              this.setState({
                newDate: event.target.value
              })
            }
          >
          </FormControl>
          {' '}
          <Button onClick={() => this.changeBirthday()}>
            Submit
          </Button>
          {this.state.showStats &&
            <div className="fade age-stats">
              <AgeStats date={this.state.birthday} />
            </div>
          }
        </Form>
      </div>
    )
  }
}

export default App;