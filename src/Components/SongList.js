import React from 'react'
import {Card, Container} from'semantic-ui-react'

class SongList extends React.Component {

    render() {

        return(
            <div className ="song-container">            
                 <div id="outer-3">
                 <div id="inner-3">
             <Card.Group centered itemsPerRow ={2}>
            {this.props.songs.map( song =><Card> <div id ="container" > <audio id ="audio" controls src = {`https://gateway.temporal.cloud/ipfs/${song.song_hash}`} ></audio></div></Card>)}
            </Card.Group> 
            </div>
            </div>  
            </div>

        )
    }
}

export default SongList