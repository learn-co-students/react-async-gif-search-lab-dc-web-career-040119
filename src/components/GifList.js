import React from 'react'

const GifList = (props) => {
    const gifs = props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} /></li>)
    return (
        <ul>
            {gifs}
        </ul>
    )
}

export default GifList