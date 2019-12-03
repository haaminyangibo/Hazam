import React from 'react'
import ToneCard from '../Components/ToneCard'
import {Card} from 'semantic-ui-react'

class BassCardContainer extends React.Component{

    render() {
        return(
        <div className= "ui relaxed  grid ">
            <Card.Group className ="row" centered itemsPerRow= {2} >
             <ToneCard  data-note ="A1"  letter ="Z"/>
             <ToneCard  data-note ="B1"  letter ="X"/>
             <ToneCard  data-note ="C1"  letter ="C"/>
            </Card.Group>
         </div>
        )
    }
}
export default BassCardContainer