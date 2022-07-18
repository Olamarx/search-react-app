import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'
function ImageList(props) {
    const { images } = props
    const display = images.map((image) => {
    return <ImageCard image={image}
    key={image.id}
    />
    })

    return(
        <div className="image-list">
            {display}
        </div>
    )
}

export default ImageList