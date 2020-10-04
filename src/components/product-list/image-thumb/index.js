import React from 'react'
import Image from '../../image'
import {ImageThumbWrapper, ProdMiniThumbs} from './image-thumb.style'

const ImageThumb = ({poster, title, onClick, thumb}) => {
    if (thumb) {
        return(
            <ProdMiniThumbs onClick={onClick}>
                <div className="image-poster">
                    <img src={poster} alt={title}/>					
                </div>
            </ProdMiniThumbs>
        )
    } else {
        return (
            <ImageThumbWrapper onClick={onClick}>
                <div className="image-poster">
                    <Image fluid={poster} alt={title}/>					
                </div>
            </ImageThumbWrapper>
        )
    }
}

export default ImageThumb;