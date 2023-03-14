import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom"

class Navbar extends Component {
    state = {clicked : false};
    handleClick =() =>{
        this.setState({ clicked: !this.state.clicked})
    }
 render() {
    return (
        <nav className="NavbarItems">
        <h1 className="navbar-logo">E-Novel</h1>
        <div className="menu-icons" >
            <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"} 
            onClick={this.handleClick}
            ></i>
        </div>
        <ul  className={this.state.clicked ? "nav-menu active":"nav-menu"}>
           
                {
                    MenuItems.map((e,index)=>{
                        return(
                            <li key={index}>
                            <Link className={e.cName} to={e.url}>
                            <i className={e.icon}></i>
                          {e.title}
                            </Link>
                                </li>
    
                        );
                    })
                }
                <button>Sign Up</button>
             
        </ul>
    </nav>
      )
 }
}

export default Navbar