import React from 'react'
import MosqueIcon from '@mui/icons-material/Mosque';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg">
            <div className="container-fluid">

                <a className="navbar-brand fw-bold text-dark d-flex align-items-center" href="#">
                    <MosqueIcon fontSize='large' className='me-2' /> Namaz
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
                        <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/aboutNamaz">Namaz</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/register">Register</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/login">Login</Link></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
