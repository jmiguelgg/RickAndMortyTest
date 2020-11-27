import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Loading from '../components/loading'
import Error from '../components/error'
import queryString from 'query-string'
import { Link } from 'react-router-dom';

const GET_CHARACTER = gql`
    query ($idCharacter: ID!){
        character(id:$idCharacter){
            name
            status
            species
            type
            gender
            image
            created
            episode{
                name
                air_date
                episode
            }
            origin{
                name
                type
                dimension
            }
            location{
                name
                type
                dimension
            }
        }
    }`

const Character = (props) => {
    const id = queryString.parse(props.location.search).id
    const {loading, error, data} = useQuery(GET_CHARACTER,{variables: {idCharacter:id}})
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
    function fillEpisodes(episodes){
        let episodeList = []
        episodes.forEach(episode => {
            episodeList.push(
                <li>
                    <h3 className="text-2xl">{episode.name}</h3>
                    <p className="text-lg pl-5"><span className="text-sm">Air date: </span>{episode.air_date}</p>
                    <p className="text-lg pl-5"><span className="text-sm">Episode code: </span>{episode.episode}</p>
                </li>
            )
        });
        return <ol className="list-decimal pl-5">{episodeList}</ol>
    }

    if(loading) return (<Loading/>)
    if(error) return (<Error className="h-full"/>)
    if(data) {
        return(
            <div className="container p-10  h-full w-full mx-auto text-white">
                <div className="bg-gray-700 rounded-lg">
                    <img className="w-full sm:w-1/2 md:w-1/3 mx-auto align-top lg:inline-block rounded-lg" loading="lazy" src={data.character.image} alt="Character"/>
                    <div className="lg:inline-block max-w-xl px-12 pb-5 lg:p-0 lg:ml-16 text-justify">
                        <div className="mb-8">
                            <div className="flex flex-row ">
                                <h1 className="text-4xl">{data.character.name}</h1>
                                <Link to={'/shop'}>
                                    <img className="w-10 my-2 mx-40" src="https://www.flaticon.com/svg/static/icons/svg/985/985691.svg" />
                                </Link>
                            </div>
                            <p className="text-xl">{iconStatus(data.character.status)}{data.character.status} - {data.character.species}</p>
                            <label className="text-gray-500">Subspecies of the character:</label>
                            <p className="text-xl">{data.character.type}</p>
                            <label className="text-gray-500">Gender:</label>
                            <p className="text-xl">{data.character.gender}</p>
                            <label className="text-gray-600">First seen in:</label>
                            <ul className="list-disc pl-5">
                                <li>
                                    <p className="text-xl"><span className="text-sm">Name: </span>{data.character.origin.name}</p>
                                </li>
                                <li>
                                    <p className="text-xl"><span className="text-sm">Type: </span>{data.character.origin.type}</p>
                                </li>
                                <li>
                                    <p className="text-xl"><span className="text-sm">Dimension: </span>{data.character.origin.dimension}</p>
                                </li>
                            </ul>
                            <label className="text-gray-600">Last known location:</label>
                            <ul className="list-disc pl-5">
                                <li>
                                    <p className="text-xl"><span className="text-sm">Name: </span>{data.character.location.name}</p>
                                </li>
                                <li>
                                    <p className="text-xl"><span className="text-sm">Type: </span>{data.character.location.type}</p>
                                </li>
                                <li>
                                    <p className="text-xl"><span className="text-sm">Dimension: </span>{data.character.location.dimension}</p>
                                </li>
                            </ul>
                            <label className="text-gray-600">Episodes:</label>
                            {fillEpisodes(data.character.episode)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Character