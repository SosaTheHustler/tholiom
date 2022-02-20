import { Link } from "react-router-dom";
import "./nav.css";

function menuToggle() {
  const toggleMenu = document.querySelector(".nav_resp");
  toggleMenu.classList.toggle("show-nav");
}

function dropDownToggle() {
  const toggleMenu2 = document.querySelector("#drop");
  toggleMenu2.classList.toggle("show-nav");
}

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="section1">
          <img
            className="burger"
            src="/img/menu.png"
            id="menu"
            onClick={menuToggle}
          ></img>
          <Link to="/">
            <img src="img/IMG_5832.png" className="nav_logo"></img>
          </Link>

          <div className="nav_list">
            <Link to="/About" className="nav_item">
              <div className="nav-link">About</div>
            </Link>
            <Link to="/" className="nav_item ministry">
              <div className="nav-link">Ministries</div>
              <div className="drop">
                <div className="drop-down">
                  <Link to="/">Kids Ministry</Link>
                  <Link to="/">Teens Ministry</Link>
                </div>
              </div>
            </Link>
            <Link to="/" className="nav_item">
              <div className="nav-link">Outreach</div>
            </Link>
            <Link to="/" className="nav_item">
              <div className="nav-link">Media</div>
            </Link>
            <Link to="/Contact" className="nav_item">
              <div className="nav-link">Prayer Request</div>
            </Link>
          </div>
        </div>
        <div className="section2">
          <div className="socials">
            <a href="" className="social-height">
              <img className="social_icon" src="img/youtube.png"></img>
            </a>
            <a href="" className="social-height">
              <img className="social_icon" src="img/facebook.png"></img>
            </a>
          </div>
          <Link to="/" className="button">
            GIVE ONLINE
          </Link>
        </div>
      </nav>
      <div className="nav_resp">
        <div className="nav_list2">
          <img className="nav_close" src="img/x.png" onClick={menuToggle}></img>
          <Link to="/About" className="nav_item" onClick={menuToggle}>
            <div className="nav-link">About</div>
          </Link>
          <Link to="/" onClick={dropDownToggle} className="nav_item ministry">
            <div className="nav-link">Ministries</div>
            <div id="drop">
              <div className="drop-down">
                <Link to="/" onClick={menuToggle}>
                  Kids Ministry
                </Link>
                <Link to="/" onClick={menuToggle}>
                  Teens Ministry
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/" className="nav_item" onClick={menuToggle}>
            <div className="nav-link">Outreach</div>
          </Link>
          <Link to="/" className="nav_item" onClick={menuToggle}>
            <div className="nav-link">Media</div>
          </Link>
          <Link to="/Contact" className="nav_item" onClick={menuToggle}>
            <div className="nav-link">Prayer Request</div>
          </Link>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Navbar;
