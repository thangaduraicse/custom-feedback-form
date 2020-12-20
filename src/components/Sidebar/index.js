import { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={ { color: '#fff' } }>
      <div className={`navbar${sidebar && ' active' || ''}`}>
        <Link to='#' className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={`nav-menu${sidebar && ' active' || ''}`}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
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
    </IconContext.Provider>
  )
};

export default Sidebar;
