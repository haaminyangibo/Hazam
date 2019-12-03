import React from 'react'
import API from '../API'


class YourSongs extends React.Component {



    componentDidMount(){

        this.setState({
            user_id : this.props.user_id
        })

      
        this.getSongs()
        
     
    }

    state = {

        user_id :"",
    
        songs: []
    }

   getSongs = () => {

        // API.getSongs(this.state.user_id).then(resp => resp.json()).then(songdata=>  this.setState ({ songs: [...songs, songdata["songs"]] }) )
        
    }

    createAudio = () => {

        // debugger
         
      return    this.state.songs.forEach( song =>  console.log(`https://gateway.temporal.cloud/ipfs/${song.song_hash}`) )
         
        
        
        // audio.src = `https://gateway.temporal.cloud/ipfs/${this.state.songs.song_hash}`
        // <div ><audio controls src = {`https://gateway.temporal.cloud/ipfs/${song.song_hash}`}></audio> </div>
    }
    render () {
        
        return(

            <div> 
             <button onClick ={() => this.createAudio()}>SHOW SONGS </button>
             {this.getSongs()}
             {/* {this.createAudio()} */}
            </div>

        )
    }

}

export default YourSongs