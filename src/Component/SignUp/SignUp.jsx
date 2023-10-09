import React, { useState } from 'react'
import { Container, Form, NavLink } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { SignUpAsync } from '../../Services/Action/AuthAction';
import { useDispatch } from 'react-redux';

function SignUp() {

    const dispatch = useDispatch();

    const [InputField, setInputFied] = useState({
        fname : '',
        email : '',
        password : '',
        con_password : ''
    })

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setInputFied({...InputField, [name] : value})
    }

    const handleSubmit = (e)=>{

        e.preventDefault()

        dispatch(SignUpAsync(InputField))

    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="fname" value={InputField.fname} onChange={ handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={InputField.email} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={InputField.password} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="con_password" value={InputField.con_password} onChange={handleChange}/>
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

export default SignUp