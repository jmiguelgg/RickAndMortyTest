import React from 'react'
import PageCards from '../components/pageCards'
import { useQuery, gql } from '@apollo/client';
import Loading from '../components/loading'
import Error from '../components/error'

const GET_LAUNCHES = gql`{
  characters(page:1,filter:{name:"rick"}){
    results{
      name
      status
      species
      image
      location{
        name
      }
      origin{
        name
      }
    }
  }
}`

const App = () => {
    const {loading, error, data} = useQuery(GET_LAUNCHES)
    
    if(loading) return(<Loading/>)
    if(error) return <Error className="h-full"/>
    if(data) {
      return(
      <div className="container p-10  h-full w-full mx-auto">
        <PageCards info={{'data':data}}/>
      </div>
    )}
}

export default App