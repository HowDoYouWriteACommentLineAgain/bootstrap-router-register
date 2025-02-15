import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useState } from 'react';


import App from './App';
import Home from './Home';
import Register from './Register';

export default function BrowserRoot(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <BrowserRouter>
                <App />
                <Container className='mt-2 rounded-lg'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Register" element={
                        <Register 
                            username={username}
                            password={password}
                            onChangeUsename={(e)=>setUsername(e.target.value)}
                            onChangePassword={(e)=>setPassword(e.target.value)}
                         />
                    } />
                </Routes>
                </Container>
            </BrowserRouter>
        </>
    );
}