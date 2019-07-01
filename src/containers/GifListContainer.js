import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      results: []
    }
  }

  render(){
    return(
        <div>
          <GifSearch
            fetchGifs={this.fetchGifs}
          />
          <GifList
            results={this.state.results}
          />
        </div>)
  }

  fetchGifs = (query='dolphins') => {
    // debugger
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(json => {
      // debugger
      this.setState({
        results: json.data
      })
    })
  }


  componentDidMount(){
    this.fetchGifs()
  }
}
