import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import API from '../API'


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
    render (){

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
  </div>
 

    )

  
    }
}

export default SignUpForm