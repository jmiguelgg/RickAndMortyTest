import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
    function iconStatus(status){
        let color = 'gray'
        if(status === 'Alive')
            color = 'green'
        else if(status === 'Dead')
            color = 'red'
        else
            color = 'gray'
        return <span className={'status__icon bg-'+color+'-500'}></span>
    }
    return(
        <Link to={'/character?id='+props.info.id}>
            <div className="w-full lg:flex text-white">
                <img className="h-70 sm:h-70 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" loading="lazy" src={props.info.image} alt="Character"/>
                <div className="w-full bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="font-bold text-3xl mb-2">{props.info.name}</div>
                        <p className="text-xl">{iconStatus(props.info.status)}{props.info.status} - {props.info.species}</p>
                        <label className="text-gray-600">Last known location:</label>
                        <p className="text-xl">{props.info.location.name}</p>
                        <label className="text-gray-600">First seen in:</label>
                        <p className="text-xl">{props.info.origin.name}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card