import React from 'react'
import BackingCard from '../Components/ToneCard'
import { Card } from 'semantic-ui-react'


const BackingTrackContainer = props => {
    
    return(
        <div >
        <Card.Group className ="row" centered itemsPerRow= {2}>
            <BackingCard letter ="Peggy Gou 1" data-note={null}/>
            <BackingCard letter ="drum beat 2" data-note={null}/>
        </Card.Group>
        </div>
    )
}

export default BackingTrackContainer