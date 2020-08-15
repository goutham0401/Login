import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from './redux/reducer'
import { BrowserRouter as Router,Redirect} from 'react-router-dom';
import './loginForm.css'
import {CardBody,
        Card,
        Form,
        FormGroup,
        Input,
        Button,
        Spinner,
        Label} from 'reactstrap'
export class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
    handleEmail=(e)=>
    {
        this.setState({ email:e.target.value})
    }
    handlePassword=(e)=>
    {
        this.setState({ password:e.target.value})
    }
    submit=(e)=>
    {   
        console.log("submit Login details");
        e.preventDefault()
        let {email,password}=this.state
        this.props.login(email,password)
    }
    render() {
        let {isLoginPending,isLoginSuccess,isLoginError}=this.props
        if(isLoginSuccess)
        {
            return <Redirect to='/FetchTable'/>
        }
        return (
            <div className='flex-container'>
                <Router>
                <Card style={{ width: '30rem' ,height:'18rem'}} color='warning'>
                <CardBody>
                <Form onSubmit={this.submit}>
                    <FormGroup >
                        <Label >Email:</Label>
                        <Input type='email' name='email' onChange={this.handleEmail}/>
                    <Label>Password:</Label>
                    <Input type='password' name='password' onChange={this.handlePassword}/>
                    <br></br>
                    <Button color='primary'>Submit</Button>
                    </FormGroup>
                    </Form>
                </CardBody>
                </Card>
                <div >
                    {isLoginPending && <div><Spinner color="success"/></div>}
                    {/* {isLoginSuccess} */}
                    {isLoginError && <div>{isLoginError.message}</div>}
                </div>
                </Router>
                </div>
        )
    }

}
const mapStateToProps=(state)=>
{   
    console.log("mapStateToProps");
    return {
        isLoginPending :state.isLoginPending,
        isLoginSuccess :state.isLoginSuccess,
        isLoginError :state.isLoginError
    }
}
const mapDispatchToProps=(dispatch)=>
{   
    console.log("mapDispatchToProps");
    return{
        login:(email,password)=>dispatch(login(email,password))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
