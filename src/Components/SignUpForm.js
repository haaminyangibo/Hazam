import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import API from '../API'
import {Link} from 'react-router-dom'


class SignUpForm extends React.Component {

    state = {
        name: "",
        email : "",
        password: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        let data =  { user: {
            name: this.state.name,
            email : this.state.email,
            password: this.state.password
        } }
        API.signUp(data).then(this.props.history.push('/signin'))

            
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount(){

      
    }
    render (){
      {this.props.user_id > 0 && this.props.history.push('/synth')}
      {document.getElementById("outer").style.display = "none"}
      {document.getElementById("outer-2").style.display = "none"}

     return (
      
       <div className= "form-container">
         <h2>Welcome to Hazam, the online synthesiser</h2>
        <Form onSubmit ={this.handleSubmit}>
        <Form.Field>
       <label>Name</label>
      <input placeholder='Name' name = "name" value ={this.state.name}  onChange ={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Email Address</label>
      <input placeholder='email address' name = "email" value ={this.state.email}  onChange ={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' name = "password"   type ="password" value ={this.state.password} onChange = {this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>

  <Link to ="/signin"> Already have an account? </Link>
  </div>
 

    )

  
    }
}

export default SignUpForm