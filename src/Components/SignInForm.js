import React from 'react';
import { Button,Form } from 'semantic-ui-react'
import API from '../API';

class SignInForm extends React.Component {

    state = {
        email: "",
        password: ""
    }

    componentDidMount(){
        if (this.props.user) {
            this.props.history.push('/synth')
        }
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
                if (data.error) throw Error(data.error), alert(data.error)
                this.props.signIn(data)
                 this.props.history.push('/synth') 
            }).then(data=> alert(data))
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
                
                <Button type='submit'>Log In</Button>
            </Form>
            
            </div>

        )
    }

}

export default SignInForm 