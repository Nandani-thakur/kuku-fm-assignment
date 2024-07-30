
// import { useState } from 'react';
// import './Nav.css';

// function Nav() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="navbar">
    
//             <div className="logo">LOGO</div>
//             <div className="search-bar">
            
//                 <input type="text" placeholder="Search product here"  />
//             </div>
//             <div className="hamburger" onClick={toggleMenu}>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//             <div className={`menu-dropdown ${isMenuOpen ? 'show' : ''}`}>
//                 <a href="#suppliers">Suppliers</a>
//                 <a href="#free-trial">Get Free Trial</a>
//                 <a href="#add-listing">Add Listing</a>
//                 <a href="#help-faq">Help/FAQ</a>
//             </div>
//             <div className="menu">
            
//                 <a href="#suppliers"><img width="30" height="30"  src="https://img.icons8.com/fluency-systems-regular/48/shopping-bag--v1.png" alt="shopping-bag--v1"/></a>

               
//                 <a href="#free-trial"><img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/download--v1.png" alt="download--v1"/></a>
//                 <a href="#free-trial">language</a>
//                 <a href="#free-trial">Get Free Trial</a>
                
//                 <a href="#help-faq" >
//                 <button className='signup_button'>Signup</button></a>
//             </div>
//         </nav>
//     );
// }

// export default Nav;
import { useState } from 'react';
import './Nav.css';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            <div className="search-bar">
                <input type="text" placeholder="Search product here" />
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`menu-dropdown ${isMenuOpen ? 'show' : ''}`}>
                <a href="#suppliers">Suppliers</a>
                <a href="#free-trial">Get Free Trial</a>
                <a href="#add-listing">Add Listing</a>
                <a href="#help-faq">Help/FAQ</a>
            </div>
            <div className="menu">
                <a href="#suppliers">
                    <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/shopping-bag--v1.png" alt="shopping-bag--v1" />
                    get coin
                </a>
                <a href="#free-trial">
                    <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/download--v1.png" alt="download--v1" />
                    Get Free Trial
                </a>
                <a href="#free-trial">Language</a>
                <a href="#free-trial">Get Free Trial</a>
                <a href="#help-faq">
                    <button className='signup_button'>Signup</button>
                </a>
            </div>
        </nav>
    );
}

export default Nav;
