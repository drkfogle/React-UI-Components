import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';


function HeaderContainer() {
    return (
    <div className="header">
    <ImageThumbnail />
    <HeaderContent />
    </div>
    )
}


export default HeaderContainer;