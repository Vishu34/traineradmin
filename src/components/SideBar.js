import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <NavLink className={({isActive})=>(`nav-link ${isActive?'active' : ''}`)} to="/">
            <i className="icon-grid menu-icon"  ></i>
            <span className="menu-title">Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>(`nav-link ${isActive?'active' : ''}`)}  to="/students">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Students</span>
          </NavLink>
        </li>     
        <li className="nav-item">
          <NavLink className={({isActive})=>(`nav-link ${isActive?'active' : ''}`)} to="/trainers">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Trainers</span>
          </NavLink>
        </li>              
        <li className="nav-item">
          <NavLink className={({isActive})=>(`nav-link ${isActive?'active' : ''}`)} to="/courses">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Courses</span>
          </NavLink>
        </li>              
        <li className="nav-item">
          <NavLink className={({isActive})=>(`nav-link ${isActive?'active' : ''}`)} to="/categories">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Categories</span>
          </NavLink>
        </li>              
        <li className="nav-item">
          <NavLink className={({isActive})=>(`nav-link ${isActive?'active' : ''}`)} to="/home-slider">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Home Slider</span>
          </NavLink>
        </li>              
                   
      </ul>
      
    </nav>
  );
}

export default SideBar;
