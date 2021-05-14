import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Ahmad',
            password: '',
            hasLoginFailed: false,
            schowSuccessMessage: false,
        }
        /*this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)*/
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(event.target.name);
        this.setState({
                [event.target.name]
                :event.target.value})
    }

    /*handleUsernameChange(event) {
        console.log(event.target.value);
        this.setState({username: event.target.value})
    }

    handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({password: event.target.value})
    }*/
    
    loginClicked() {
        if(this.state.username === 'Ahmad' && this.state.password === '123'){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            
            /*console.log('Successful')
            this.setState({schowSuccessMessage: true})
            this.setState({hasLoginFailed: false})*/
        }
            
        else
        {
            console.log('Failed')
            this.setState({schowSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }

    render() { 
        return (
            

            <div>
                <h1>Login</h1>
                <div className = "container">
                    {/*<SchowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed} />
                    <SchowLoginSuccessMessage schowSuccessMessage = {this.state.schowSuccessMessage}/>*/}
                    {this.state.hasLoginFailed &&  <div className= "alert alert-warning">Invalid Credentials </div>}
                    {this.state.schowSuccessMessage && <div> Login Successful </div>}

                    User Name: <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
                    Password: <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
                    <button className = "btn btn-success" onClick = {this.loginClicked}> Login </button>
                    
                </div>
            </div>
         )
    }
    
}

/*function SchowInvalidCredentials (props) {
        if (props.hasLoginFailed){
            return <div>Invalid Credentials </div>
        }
        return null
        
}

function SchowLoginSuccessMessage (props) {
    if (props.schowSuccessMessage){
        return <div> Login Successful </div>
    }
    return null
}*/

export default LoginComponent