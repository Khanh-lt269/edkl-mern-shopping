import React from 'react'
import "../asset/backdrop.css"


const Backdrop = ({show, click}) => {
    return show && (
        <div className="backdrop" onClick={click}>
            
        </div>
    )
}

export default Backdrop
