import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import ShoppingPage from '../02-components-patterns/pages/ShoppingPage';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/home" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                  Shopping
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                  Users
                </NavLink>
              </li>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            <Route path="home" element={<ShoppingPage />} />
            <Route path="about" element={<h1>About Pages</h1>} />
            <Route path="users" element={<h1>Users Pages</h1>} />
            {routes.map(({ to, Component }) => (
              <Route key={to} path={to} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
