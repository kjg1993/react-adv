import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';
import RegisterPage from '../03-forms/pages/RegisterPage';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink 
                to="/register" 
                className={({ isActive }) => isActive ? "nav-active" : ""}
                
              >
                Resgister Page
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-active" : ""}
                
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/users" 
                className={({ isActive }) => isActive ? "nav-active" : ""}
                
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/register" element={ <RegisterPage/> } />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
