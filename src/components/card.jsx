import React from 'react'

const Card = (props) => {

    return(
        <div class="w-full lg:flex text-white">
            <div class="h-70 sm:h-70 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: 'url('+props.info.image+')'}} title="Character"></div>
            <div class="w-full bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <div class="font-bold text-3xl mb-2">{props.info.name}</div>
                    <p className="text-xl">{props.info.status} - {props.info.species}</p>
                    <label className="text-gray-600">Last known location:</label>
                    <p className="text-xl">{props.info.location.name}</p>
                    <label className="text-gray-600">First seen in:</label>
                    <p className="text-xl">{props.info.origin.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card