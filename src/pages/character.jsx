import React,{useState,useEffect} from 'react'
import Loading from '../components/loading'
import Error from '../components/error'
import queryString from 'query-string'
const axios = require('axios').default;

const Character = (props) => {
    const id = queryString.parse(props.location.search).id
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        loadCharacter()
    },[])
  
    function loadCharacter() {
        setLoading(true)
        setError(null)
        const res = getCharacter()
        res.then((res) => {
          setData(res)
          setLoading(false)
        })
    }
  
    async function getCharacter() {
        try {
            const character = await axios.get('https://rickandmortyapi.com/api/character/'+id)
            const origin = await axios.get(character.data.origin.url)
            const location = await axios.get(character.data.location.url)
            const episodes = []
            await Promise.all(character.data.episode.map(async (elem) => {
                const episode = await axios.get(elem)
                episodes.push(episode.data)
            }))
            return {character:character.data,origin:origin.data,location:location.data,episodes:episodes}
        } catch (erro) {
            console.log(erro)
            setError(erro)
            setLoading(false)
        }
    }

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
                <li key={episode.id+'-'+episode.name}>
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
                            <h1 className="text-4xl">{data.character.name}</h1>
                            <p className="text-xl">{iconStatus(data.character.status)}{data.character.status} - {data.character.species}</p>
                            <label className="text-gray-500">Subspecies of the character:</label>
                            <p className="text-xl">{data.character.type}</p>
                            <label className="text-gray-500">Gender:</label>
                            <p className="text-xl">{data.character.gender}</p>
                            <label className="text-gray-600">First seen in:</label>
                            <ul className="list-disc pl-5">
                                <li>
                                    <p className="text-xl"><span className="text-sm">Name: </span>{data.origin.name}</p>
                                </li>
                                <li>
                                    <p className="text-xl"><span className="text-sm">Type: </span>{data.origin.type}</p>
                                </li>
                                <li>
                                    <p className="text-xl"><span className="text-sm">Dimension: </span>{data.origin.dimension}</p>
                                </li>
                            </ul>
                            <label className="text-gray-600">Last known location:</label>
                            <ul className="list-disc pl-5">
                                <li>
                                    <p className="text-xl"><span className="text-sm">Name: </span>{data.location.name}</p>
                                </li>
                                <li>
                                    <p className="text-xl"><span className="text-sm">Type: </span>{data.location.type}</p>
                                </li>
                                <li>
                                    <p className="text-xl"><span className="text-sm">Dimension: </span>{data.location.dimension}</p>
                                </li>
                            </ul>
                            <label className="text-gray-600">Episodes:</label>
                            {fillEpisodes(data.episodes)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Character