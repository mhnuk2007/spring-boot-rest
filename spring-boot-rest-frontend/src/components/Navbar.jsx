import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/jobs?search=${encodeURIComponent(search.trim())}`);
      setSearch('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100 sticky-top" style={{ minWidth: '100vw' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">Job Portal</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/jobs">Job Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/add">Add Job</Link>
            </li>
            <li className="nav-item">
              <form className="d-flex ms-3" onSubmit={handleSearch} role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search jobs..."
                  aria-label="Search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ minWidth: '140px', borderRadius: '8px' }}
                />
                <button className="btn btn-warning" type="submit">Search</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
