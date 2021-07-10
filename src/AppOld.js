import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  render() {
    const chars = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

     return (
      
      <div className="Pap">
        <Table myData={chars} />
      </div>
    )
  }
}

export default App