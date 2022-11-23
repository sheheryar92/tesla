import React,{useState} from "react";
import Logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import "../components/Style.css";
import CloseIcon from '@mui/icons-material/Close';
function Header() {

  const [open, setOpen] = useState(false)


  return (
    <div className="header_container">
      <img src={Logo} alt="" srcset="" />

      <div className="menu_left">
        <p>
          <a href="/">Model S</a>
        </p>
        <p>
          <a href="/">Model 3</a>
        </p>
        <p>
          <a href="/">Model X</a>
        </p>
        <p>
          <a href="/">Model Y</a>
        </p>
      </div>

      <div className="menu_right">
        <p>
          <a href="/">shop</a>
        </p>
        <p>
          <a href="/">tesla account</a>
        </p>


{!open ?  <MenuIcon onClick={() => setOpen(true) } />  : <div className="hamburgerMenu">
  <div className="close_icon">
  <CloseIcon onClick={() => setOpen(false) }/>
  </div>

<li>Model S</li>
<li>Model S</li>
<li>Model S</li>
<li>Model S</li>
<li>Model S</li>
</div>  }



 
        
       
      </div>


    


{/* hamburgerMenu */}
 {/* <div className="hamburgerMenu">
  <div className="close_icon">
  <CloseIcon onClick={() => setOpen(!open) }/>
  </div>

<li>Model S</li>
<li>Model S</li>
<li>Model S</li>
<li>Model S</li>
<li>Model S</li>
</div>  */}
{/* hamburgerMenu */}


    </div>
  );
}

export default Header;
