import { Routes, Route, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css"

import { FcApproval } from "react-icons/fc";
import Home from '../Home'
import Signup from '../Signup'
import Login from '../Login'
import Contactus from '../Contactus'


import { useSelector } from "react-redux";
import { clearLoginStatus } from "../../slices/userSlice";

import { useDispatch } from "react-redux";
//import Userdashboard from "../userdashboard/Userdashboard";
import { useNavigate ,Navigate} from "react-router-dom";


function Header()
{

  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  //get dispathc function
  let dispath = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/login");
  };



    return( 
    <div className="page-container">
    <div className='content-wrap'>
      {/* links to routes */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyApp<FcApproval/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isSuccess !== true ? (
                <>
            <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="/" >Home</NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink className="nav-link " to="login" >login</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link " to="Signup" >Signup</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="Contactus" >Contactus</NavLink>
              </li>

            </ul>
            </>
              ) : (
                <>
                  {/* This dropdown is visible only when a user is logged in */}
                  <NavDropdown
                    title={userObj.username}
                    id="collasible-nav-dropdown drop-down">
                   
                  
                    <NavDropdown.Item>Change password</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}

          </div>
        </div>
      </nav>
      <Routes>

      
    <Route path="/" element={<Home/>}/>
    <Route path="Signup" element={<Signup/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="Contactus" element={<Contactus/>}/>
    </Routes> 
    
  </div>
</div>  )
}
export default Header;