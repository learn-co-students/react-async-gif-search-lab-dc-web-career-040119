import React, {Component} from 'react'

class GifSearch extends Component{
  state = {
    searchValue: ''
  }


  handleSearch = (event) => {
    // debugger
    this.setState({
      searchValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.fetchGifs(this.state.searchValue)
  }

  render(){
    return(
      //form has an onSubmit callback to handle searching for gifs by whatever the form dictates
      //the input has an onChange callback which physically grabs whatever is inside the input and passes it to the form's onSubmit to process looking for gifs that match that search term
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.searchValue} onChange={this.handleSearch} />
          <input type='submit' />
        </form>
    </div>)
  }
}

export default GifSearch
