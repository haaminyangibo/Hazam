import React from 'react'
import {Card} from 'semantic-ui-react'

class ToneCard extends React.Component{

    render (){

        const {datanote , letter} = this.props
        return(

                <div >
                  <Card onClick={this.props.onClick}fluid className= "column" data-note={datanote}>
                    <Card.Content>
                        <Card.Header>{letter}</Card.Header>
                    </Card.Content>             
                  </Card>
                </div>
            
        )
    }
}

export default ToneCard