import React from 'react'

class SongList extends React.Component {


    render() {

        return(
            <div>
            {this.props.songs.map( song =><div id ="container" > <audio id ="audio" controls src = {`https://gateway.temporal.cloud/ipfs/${song.song_hash}`} ></audio> </div>)}
            </div>
        )
    }

}

export default SongList