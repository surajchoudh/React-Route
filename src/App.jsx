import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import AllCourses from './AllCourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';



const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Navigation */}
        <nav className="navigation">
          <NavLink exact to="/" activeClassName="active">All</NavLink>
          <NavLink to="/full-stack-development" activeClassName="active">Full Stack Development</NavLink>
          <NavLink to="/data-science" activeClassName="active">Data Science</NavLink>
          <NavLink to="/cyber-security" activeClassName="active">Cyber Security</NavLink>
          <NavLink to="/career" activeClassName="active">Career</NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
