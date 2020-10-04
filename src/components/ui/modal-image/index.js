import React from 'react';
import { Lightbox } from 'react-modal-image';
import './modal.css';

const ImageModal = ({url, onClose}) => {
    return(
        <div className="modal-image-wrapper">
            <Lightbox 
                medium={url}
                onClose={onClose}
                hideDownload={true} />
        </div>
    )
}

export default ImageModal;