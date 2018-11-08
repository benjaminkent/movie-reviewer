import React, { Component } from 'react'
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
