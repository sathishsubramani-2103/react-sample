import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props)

        this.state ={
            title:"GK Motors"
        }
    }

    render(){
        return(
            <>
                <nav className='header'>
                    <div className='nav-container'>
                        <NavLink exact to="/" className="nav-logo">
                            GK Motors
                        </NavLink>

                        <ul className='navmenu'>
                            <li className='nav-item'>
                                <NavLink exact to="/" aciveClassname="active" className="nav-links">
                                    Home
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact to="/about" aciveClassname="active" className="nav-links">
                                    About
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact to="/vehicles" aciveClassname="active" className="nav-links">
                                    Vehicles
                                </NavLink>
                            </li>
                             <li className='nav-item'>
                                <NavLink exact to="/contact" aciveClassname="active" className="nav-links">
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
};

export default Header;