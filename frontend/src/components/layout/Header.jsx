import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header(props) {
    return (
       <>
           <nav className="navbar navbar-expand-sm navbar-light bg-light">
               <div className="container-fluid">
                   <a className="navbar-brand" href="#">Lead Manager</a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                           {/*<li className="nav-item">*/}
                           {/*    <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                           {/*</li>*/}

                       </ul>

                   </div>
               </div>
           </nav>

       </>
    );
}

export default Header;