import React from 'react'
import API from '../API'
import SongList from './SongList'

class YourSongs extends React.Component {

    componentDidMount(){

        this.setState({
            user_id : this.props.user_id
        })   
    }

    state = {
        user_id :"",
        songs: []
    }

   getSongs = () => {
     this.state.user_id && API.getSongs(this.state.user_id).then(resp => resp.json()).then(songdata=>  this.setState ({ songs: songdata.songs }) )         
    }

    render () {
           
       {this.getSongs() }

        let controls = document.getElementById("outer")
        controls.style.display = "none"
            
        return(
            <>        
              <h1>Here are your great songs! </h1>
            
            {this.state.songs.length > 0 && <SongList songs = {this.state.songs}/>}                
            </>

        )
    }
}

export default YourSongs