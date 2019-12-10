import React from 'react';
import { Button,Form } from 'semantic-ui-react'
import API from '../API';
import {Link} from 'react-router-dom'

class SignInForm extends React.Component {

    state = {
        email: "",
        password: ""
    }

    componentDidMount(){
        if (this.props.user) {
            this.props.history.push('/synth')
        }

        document.getElementById("outer").style.display ="none"
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        API.signIn(this.state.email, this.state.password)
            .then(data => {
                if (data.error) throw Error(data.error)
                this.props.signIn(data)
                 this.props.history.push('/synth') 
            }).then()
            .catch(error => console.log(error))
            
    }

    render(){

        return(
        <div className="form-container" >           
            <Form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                <Form.Field>
                    <input placeholder='Email' name="email" value={this.state.email} onChange={this.handleChange}/>
                </Form.Field>
                
                <Form.Field>
                    <input placeholder='Password' name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                </Form.Field>
                
                <Button type='submit'>Log In</Button><br></br>
                <Link to="/signup">Don't have an account? Sign up here!</Link>
            </Form>
            
            </div>

        )
    }
}

export default SignInForm 