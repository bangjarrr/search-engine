import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import feather from 'feather-icons';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        feather.replace();
    }, []);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center m-5">
                <Button className='bg-transparent border-0'>
                    <i data-feather="user" color='#000'></i>
                </Button>
                <h2>Blog Terkait Project</h2>
                <Button className='bg-transparent border-0'>
                    <i data-feather="moon" color='#000'></i>
                </Button>
            </div>
            <Form className='d-flex justify-content-center'>
                <Form.Group controlId="formBasicEmail" className='d-flex justify-content-center align-items-center'>
                    <Form.Control
                        type="text"
                        placeholder="Telusuri Project..."
                        className='mx-3 border-4'
                        value={query}
                        onChange={handleInputChange}
                    />
                    <i data-feather="search"></i>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Search;
