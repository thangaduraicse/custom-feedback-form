import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

const Sidebar = () => (
  <IconContext.Provider value={ { color: '#fff' } }>
    {
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            Profile portfolio
          </li>
          {
            SidebarData.map((item, index) => (
              <li key={index} className={item.className}>
                <NavLink activeClassName="active" exact replace to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    }
  </IconContext.Provider>
);

export default Sidebar;
