import React from 'react'

const Loading = () => {
    return(
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
            <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style={{top: '50%'}}>
                <i className="fas fa-circle-notch fa-spin fa-5x relative" style={{left: -40, top: -40}}></i>
            </span>
        </div>
    )
}

export default Loading