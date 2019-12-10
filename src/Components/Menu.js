import React from 'react'
// import {Dropdown} from 'semantic-ui-react'
import {Link, M} from 'react-router-dom'


const HeaderMenu = (props) => {

    return(
     <div id ="header" className= "ui massive menu">
            
         <div  id="headertext"  className= "header item">
             <Link  to="/synth" className="headerLogo" >Hazam</Link>  
         </div>

         <div className= "header item" floated ="right">
             {props.user ? `Hey, ${ props.user}!` : null}
        </div>
   
         <div className= "header item" id= "header2">
            {props.user ? <div> <Link  className= "logout" to="/yoursongs" >Your Songs</Link> </div>: null }
         </div>
         
         <div className= "header item" id= "header3" >
              {props.user ? <div  oncClick = {props.signOut} ><Link className= "logout" to="/signin" onClick= {() => props.signOut()}> Logout </Link></div> : null }
        </div>    
    
 </div>
            
    )
}
export default HeaderMenu