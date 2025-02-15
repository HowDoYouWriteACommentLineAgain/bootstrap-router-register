import {Card, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register({username,password,onChangeUsename,onChangePassword, address, onChangeAddress, status, onChangestatus}){
    const hasTyped = () =>{
        return username.length === 0 ? false : true;
    }
    return(
        <Card as={Form} onSubmit={(e)=>e.preventDefault()} className='bg-dark' text='light'>
            <Card.Header className='bg-secondary text-tertiary' ><h1>Register Form</h1></Card.Header>
            <Card.Body>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder='Please input your username' value={username} onChange={onChangeUsename} required />

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder='Please input your Password' value={password} onChange={onChangePassword} required/>

                <Form.Label>Status</Form.Label>
                <Form.Select placeholder='Please input your Status' value={status} onChange={onChangestatus} required>
                    <option disabled>Please pick one</option>
                    <option>Undergrad</option>
                    <option>Graduate</option>
                </Form.Select>
                

                {hasTyped && <Form.Text className='text-light'>{username}</Form.Text>}

                <Card.Footer>
                    <Button type="submit" >Submit form</Button>

                </Card.Footer>
            </Card.Body>
        </Card>
    );
}