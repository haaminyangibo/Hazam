import React from 'react'
import {Card} from 'semantic-ui-react'

const  BackingTrack = props => {
  const {name} = props
  return(

    <Card>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
        </Card.Content>
    </Card>
    
    )   
}

export default BackingTrack