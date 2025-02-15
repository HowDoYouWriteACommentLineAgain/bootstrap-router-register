import {Card, Form} from 'react-bootstrap';

export default function Register({username,password,onChangeUsename,onChangePassword}){
    return(
        <Card className='bg-dark' text='light'>
            <Card.Header className='bg-dark text-light' ><h1>Register Form</h1></Card.Header>
            <Card.Body>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder='Please input your username' onChange={onChangeUsename}></Form.Control>

                <Form.Label>Password</Form.Label>
                <Form.Control placeholder='Please input your Password' onChange={onChangePassword}></Form.Control>
                <Form.Text className='text-light'>Welcome {username}, {password} is too simple</Form.Text>
            </Card.Body>
        </Card>
    );
}