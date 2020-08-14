import React,{useState,useEffect} from 'react'
import Card from '../components/card'

const PageCards = (props) => {
    const [cards,setCards] = useState([])
    function generateCards(){
        let newArrayCards = []

        props.info.data.characters.results.forEach(element => {
            newArrayCards.push(<Card key={element.id} info={element}/>)
        });
        setCards(newArrayCards)
    }
    useEffect(() => {
        generateCards(props.info.page)
    },[props.info.page])
    return(
        <div className="grid md:w-2/3 lg:w-full mx-auto md:grid-flow-row gap-8 md:grid-cols-1 xl:grid-cols-2">
          {cards}
        </div>
    )
}

export default PageCards