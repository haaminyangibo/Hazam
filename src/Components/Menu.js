import React from 'react'
// import {Dropdown} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const HeaderMenu = (props) => {

    return(
        <div id ="header" className= "ui massive menu">
            <div  id="headertext"  className= "header item">
           <Link to="/synth" >Hazam</Link>
        
         </div>
      {  props.user ? <div  id="headertext"  className= "header item">
           <Link to="/yoursongs" >Your Songs</Link>
         </div>: null }
         <div className= "header item" floated ="right">
    
       {props.user ? `Hey,${ props.user}!` : null }
        </div>

    
    {props.user ? <div  oncClick = {props.signOut} id="headertext"  className= "header item">
        <Link to="/signin" onClick= {() => props.signOut()}> Logout</Link >  </div> : null }
        </div>

        
    )
}
export default HeaderMenu