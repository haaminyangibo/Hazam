import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import HeaderMenu from './Components/Menu'
import ReactTone from './reactTone.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignInForm from './Components/SignInForm';
import SignUpForm from './Components/SignUpForm';
import YourSongs from './Components/YourSongs';
import API from './API'



class  App extends React.Component {

  state= {
  user:"",
   user_id: ""
  }
 
  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.signIn(data)

        })
        .catch(error => console.log(error))
    }

  }

 signIn = user => {
  this.setState({ user: user.name , user_id: user.id})
  localStorage.setItem('token', user.token)
  localStorage.setItem('user_id', user.id)
}

signOut = () => {
  this.setState({ user: '' })
  localStorage.removeItem('token')
}


 

  render () {
    const {sad} = this.state
    


  return ( 
    <div className= "app">

      <HeaderMenu ></HeaderMenu>


      <Router>

      <Switch>
      <Route exact path="/" component={routerProps => <SignUpForm   {...routerProps}/>}/>

      <Route path="/synth" component ={routerProps => <ReactTone {...routerProps} sad ={sad} user_id ={this.state.user_id} /> }/>
      <Route path="/signup" component={routerProps => <SignUpForm {...routerProps} />}/>
      <Route path = "/signin" component={routerProps => <SignInForm {...routerProps} signIn = {this.signIn}/>}/>
      <Route path = "/yoursongs" component={routerProps => <YourSongs {...routerProps} user_id = {this.state.user_id} />}/>

      </Switch>

      </Router>


    </div>

   );
  }
}

export default App;
