import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    state = {
        gifs: [],
        searchInput: ''
    }

    handleSearchFormChange = (e) => {

        this.setState({searchInput: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://api.giphy.com/v1/gifs/search?api_key=z5DJIDiWuN0TV5er6cT5tK5Uu5V1nZ76&q=${this.state.searchInput}&limit=25`)
            .then(resp => resp.json())
            .then(gifs => {
                this.setState({gifs: gifs.data})

            })
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} handleSearchFormChange={this.handleSearchFormChange} />
                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }
}

export default GifListContainer