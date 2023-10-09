import React, { useState } from 'react'
import { Container, Form, NavLink } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { SignInAsync } from '../../Services/Action/AuthAction';

function SignIn() {

    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const {Islogin} = useSelector(state =>state.Authreducer)

    const [InputField, setInputFied] = useState({
        email : '',
        password : ''
    })

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setInputFied({...InputField, [name] : value})
    }

    const handleSubmit = (e)=>{

        e.preventDefault()

        dispatch(SignInAsync(InputField))

    }

    if(Islogin){
        naviagte('/')
    }
    else{
        return (
            <Container>
                <Form onSubmit={handleSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={InputField.fname} onChange={handleChange}/>
                </Form.Group>
    
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={InputField.fname} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
    
    
            <p>
                Already Acoount ?
                <NavLink to="/signin">
                    SignIn
                </NavLink>
            </p>
    
            </Form>
            </Container>
        )
    }
  
}

export default SignIn;