import React,{useState} from 'react'
import PageCards from '../components/pageCards'
import { useQuery, gql } from '@apollo/client';
import Loading from '../components/loading'
import Error from '../components/error'

const GET_CHARACTERS = gql`
  query($name: String!){
    characters(page:1,filter:{name:$name}){
      results{
        id
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
    const [searchByName,setSearchByName] = useState('morty')
    const [name,setName] = useState('')
    const {loading, error, data} = useQuery(GET_CHARACTERS,{variables:{name:searchByName}})

    function handlerSearchByName(){
      setSearchByName(name)
    }

    if(loading) return(<Loading/>)
    if(error) {
      if(error.graphQLErrors[0].extensions.response.status === 404){
        return(
          <div className="container p-10  h-full w-full mx-auto">
            <div className="w-1/2 mx-auto mb-5">
              <div className="relative text-gray-600">
                <form onSubmit={() => handlerSearchByName()}>
                  <input type="text" onChange={(text) => setName(text.target.value)} placeholder="Search" className="w-full bg-white h-12 px-5 pr-10 rounded-full text-lg focus:outline-none"/>
                  <button type="submit" onClick={() => handlerSearchByName()} className="absolute right-0 top-0 mt-4 mr-4">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 56.966 56.966" space="preserve" width="512px" height="512px">
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <svg className="mx-auto my-24" viewBox="0 0 512 512" space="preserve" width="200px" height="200px">
              <g>
                <g>
                  <path fill="#FFFFFF" d="M95.15,81.01c-3.91-3.91-10.24-3.91-14.14,0c-3.91,3.9-3.91,10.23,0,14.14c3.9,3.9,10.23,3.9,14.14,0 C99.05,91.24,99.05,84.91,95.15,81.01z"/>
                </g>
              </g>
              <g>
                <g>
                  <path fill="#FFFFFF" d="M500.281,443.719L368.491,311.92c-1.875-1.875-4.419-2.929-7.071-2.929c-2.652,0-5.195,1.054-7.071,2.929l-27.63-27.624
                    C348.517,253.747,360,217.879,360,180C360,80.748,279.252,0,180,0S0,80.748,0,180s80.748,180,180,180
                    c37.878,0,73.746-11.482,104.295-33.281l27.624,27.631c-1.875,1.875-2.928,4.419-2.928,7.071c0,2.652,1.054,5.196,2.93,7.071
                    l111.799,111.79l20,20C451.276,507.838,461.319,512,472,512c10.681,0,20.724-4.162,28.278-11.716
                    C507.837,492.731,512,482.687,512,472S507.837,451.269,500.281,443.719z M279.047,305.669C250.578,328.128,216.329,340,180,340
                    c-88.224,0-160-71.776-160-160S91.776,20,180,20c88.225,0,160,71.776,160,160c0,36.33-11.871,70.579-34.329,99.044
                    C297.878,288.915,288.92,297.873,279.047,305.669z M300.009,314.148c4.968-4.449,9.69-9.171,14.139-14.139l26.059,26.052
                    l-14.146,14.146L300.009,314.148z M430.789,459.068l-97.656-97.649l28.279-28.28c0.002-0.002,0.005-0.004,0.008-0.007
                    l97.648,97.657L430.789,459.068z M486.139,486.139C482.359,489.918,477.338,492,472,492s-10.359-2.082-14.139-5.861
                    l-12.929-12.929l28.278-28.278l12.931,12.932C489.919,461.638,492,466.659,492,472S489.919,482.361,486.139,486.139z"/>
                </g>
              </g>
              <g>
                <g>
                  <path fill="#FFFFFF" d="M194.143,180l32.929-32.929c3.905-3.905,3.905-10.237,0-14.143c-3.905-3.906-10.237-3.905-14.143,0L180,165.857
                    l-32.929-32.929c-3.905-3.905-10.237-3.905-14.143,0c-3.906,3.905-3.905,10.237,0,14.143L165.857,180l-32.929,32.929
                    c-3.905,3.905-3.905,10.237,0.001,14.142c1.953,1.953,4.512,2.929,7.071,2.929s5.119-0.976,7.071-2.929L180,194.143l32.929,32.929
                    c1.953,1.953,4.512,2.929,7.071,2.929s5.119-0.976,7.071-2.929c3.905-3.905,3.905-10.237,0-14.143L194.143,180z"/>
                </g>
              </g>
              <g>
                <g>
                  <path fill="#FFFFFF" d="M180,40c-22.305,0-44.512,5.398-64.221,15.611c-4.903,2.541-6.819,8.576-4.278,13.48c2.542,4.904,8.576,6.819,13.48,4.278
                    C142.1,64.498,160.611,60,180,60c66.168,0,120,53.832,120,120s-53.832,120-120,120S60,246.168,60,180
                    c0-19.383,4.498-37.891,13.369-55.009c2.542-4.904,0.626-10.938-4.277-13.479c-4.904-2.542-10.938-0.626-13.48,4.277
                    C45.398,135.498,40,157.701,40,180c0,77.196,62.804,140,140,140s140-62.804,140-140S257.196,40,180,40z"/>
                </g>
              </g>
            </svg>
            <h1 className="text-center text-5xl text-white">No matches in the search</h1>
          </div>
        )
      }
      return <Error className="h-full"/>
    }
    if(data) {
      return(
      <div className="container p-10  h-full w-full mx-auto">
        <div className="w-1/2 mx-auto mb-5">
          <div className="relative text-gray-600">
            <form onSubmit={() => handlerSearchByName()}>
              <input type="text" onChange={(text) => setName(text.target.value)} placeholder="Search" className="w-full bg-white h-12 px-5 pr-10 rounded-full text-lg focus:outline-none"/>
              <button type="submit" onClick={() => handlerSearchByName()} className="absolute right-0 top-0 mt-4 mr-4">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 56.966 56.966" space="preserve" width="512px" height="512px">
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <PageCards info={{'data':data}}/>
      </div>
    )}
}

export default App