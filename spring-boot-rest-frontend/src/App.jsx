import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/Home';
import JobPosts from './pages/JobPosts';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';
import JobDetail from './pages/JobDetail';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container pt-5" style={{ minHeight: 'calc(100vh - 56px)' }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/jobs" element={<JobPosts />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/add" element={<AddJob />} />
          <Route path="/edit/:id" element={<EditJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
