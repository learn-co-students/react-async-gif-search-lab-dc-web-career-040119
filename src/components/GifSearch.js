import React from 'react'

const GifSearch = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input className='form-control' type="text" onChange={props.handleSearchFormChange}/>
            <input className='btn btn-primary' type="submit" name="Get Gifs"/>
        </form>
    )
}

export default GifSearch