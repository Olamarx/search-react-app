import React from 'react'
import './ImageList.css'

function ImageList(props) {
    const { images } = props
    const display = images.map(({urls, id, alt_description }) => {
    return <img src={urls.regular} key={id} alt={alt_description}/>
    })

    return(
        <div className="image-list">
            {display}
        </div>
    )
}

export default ImageList