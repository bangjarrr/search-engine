import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import feather from 'feather-icons';
import Swal from 'sweetalert2';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        feather.replace();
    }, []);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    const toGithub = () => {
        window.open(
            'https://github.com/alfajarjaya', '_blank'
        )
    };

    const toPortofolio = () => {
        Swal.fire({
            title: 'Switch Page',
            text: 'Anda akan beralih halaman dan mengunjungi website developer ini.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak',
        }).then((result) => {
            if (result.isConfirmed) {
                window.open('https://alfajjar.my.id', '_blank');
            }
        })
    }


    return (
        <div>
            <div className="d-flex justify-content-between align-items-center m-5">
                <Button className='bg-transparent border-0' onClick={toPortofolio}>
                    <i data-feather="user" color='#000'></i>
                </Button>
                <h2 className="text">Blog Terkait Project</h2>
                <Button className='bg-transparent border-0' onClick={toGithub}>
                    <i data-feather="github" color='#000'></i>
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
