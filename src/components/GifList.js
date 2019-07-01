import React from 'react'

const GifList = (props) => {
  //if results is not null, then we will map over the items in the array, and render them within a <ul> as individual <li>'s. if it is null, then show null.
  return(<div>
            <ul>
              {props.results.map(gifLink => <li key={gifLink.images.original.url}><img src={gifLink.images.original.url} alt='gif'/></li>)}
            </ul>
        </div>)
}

export default GifList
