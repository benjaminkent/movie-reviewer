import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('/api/movies')
      .then(m => m.json())
      .then(data => {
        this.setState({ movies: data })
      })

    // axios.get('/api/movies').then(response => {
    //   this.setState(response.data)
    // })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map(m => (
            <li key={m.id}>{m.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
