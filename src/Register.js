import {Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register({username,password,onChangeUsename,onChangePassword}){
    const hasTyped = () =>{
        return username.length === 0 ? false : true;
    }
    return(
        <Card className='bg-dark' text='light'>
            <Card.Header className='bg-dark text-light' ><h1>Register Form</h1></Card.Header>
            <Card.Body>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder='Please input your username' value={username} onChange={onChangeUsename}></Form.Control>

                <Form.Label>Password</Form.Label>
                <Form.Control placeholder='Please input your Password' value={password} onChange={onChangePassword}></Form.Control>

                {hasTyped && <Form.Text className='text-light'>{username}</Form.Text>}
            </Card.Body>
        </Card>
    );
}