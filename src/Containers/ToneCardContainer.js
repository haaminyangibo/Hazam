import React from 'react'
import ToneCard from '../Components/ToneCard'
import {Card} from 'semantic-ui-react'

class ToneCardContainer extends React.Component{

    render() {
        return(
        <div className= "ui relaxed  grid ">
            <Card.Group className ="row" centered itemsPerRow= {2} >
             <ToneCard  data-note ="C4"  letter ="S"/>
             <ToneCard  data-note ="D4"  letter ="D"/>
             <ToneCard  data-note ="D#4"  letter ="F"/>
             <ToneCard  data-note ="E4"  letter ="G"/>
             <ToneCard  data-note ="F4"  letter ="H"/>
             <ToneCard  data-note ="G#4"  letter ="J"/>
             <ToneCard  data-note ="A4"  letter ="K"/>
             <ToneCard  data-note ="A#4"  letter ="L"/>
            </Card.Group>
         </div>
        )
    }
}
export default ToneCardContainer