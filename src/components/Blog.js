import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';

import '../style/global.css';
import manajemenPerpustakaan from './mp.png';

const projects = [
    {
        href: "https://manajemen-perpustakaan.vercel.app/",
        imgSrc: manajemenPerpustakaan,
        alt: "Manajemen Perpustakaan by Bang_Jarrrz 📚",
        description: "Tugas Akhir Mapel PPLG."
    },
    {
        href: "https://alfajarjaya.github.io/KopiKita/",
        imgSrc: "https://bangjarrr.github.io/search-engine/foto/Cafe.png",
        alt: "kedai kopi by Bang_Jarrrz🍵",
        description: "Membangun kedai kopi menggunakan HTML, CSS , dan Javascript."
    },
    {
        href: "https://debian-11.netlify.app/",
        imgSrc: "https://bangjarrr.github.io/search-engine/foto/DEB.png",
        alt: "Debian 11 by Bang_Jarrrz 👨‍💻",
        description: "Tutorial Install Linux Debian 11."
    },
    {
        href: "https://translate-python.vercel.app/",
        imgSrc: "https://bangjarrr.github.io/search-engine/foto/translateGUI.png",
        alt: "Translate bg Bang_Jarrrz 🔍",
        description: "Website untuk menerjemahkan nama-nama hewan dari bahasa Inggris, Jepang, dan Indonesia, semuanya dibuat menggunakan Python."
    },
    {
        href: "https://tkj2skanesa.vercel.app/",
        imgSrc: "https://alfajjar.my.id/static/media/kelas.d826a4f4d89d08ad89ce.png",
        alt: "Class Website by Bang_Jarrrz 🏛️",
        description: "Membangun website kelas yang berfungsi sebagai pusat gallery beserta kenagan bagi teman-teman, berisikan tentang gallery class, blog, dll."
    },
    {
        href: "https://qrcodegeneratorbyfajar.vercel.app/",
        imgSrc: "https://alfajjar.my.id/static/media/qrcode.43781594c9b3507e053a.png",
        alt: "QrCode Generator by Bang_Jarrrz 📸",
        description: "Membangun website kelas yang berfungsi sebagai pusat gallery beserta kenagan bagi teman-teman, berisikan tentang gallery class, blog, dll."
    }
];

function Blog() {
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleSearch = (query) => {
        const filtered = projects.filter(project =>
            project.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProjects(filtered);
    };

    return (
        <>
            <Search onSearch={handleSearch} />
            <Container className='d-flex flex-column justify-content-center align-items-center my-5'>
                <Row className='flex-column'>
                    {filteredProjects.map((project, index) => (
                        <Col key={index} className='d-flex justify-content-center align-items-center flex-column text-center m-2'>
                            <div className="borders w-50 pb-2">
                                <a href={project.href} target='_blank' rel='noreferrer' className='text-decoration-none text-dark'>
                                    <img src={project.imgSrc} alt={project.alt} className='img-fluid img' />
                                    <p className='mt-3'>{project.description}</p>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Blog;
