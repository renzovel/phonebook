import React from 'react';
import Logo from '../../asset/images/logo192.png';
function Header(){
    return (
        <header className='Header'>
            <div className='logo-container'>
                <img src={Logo} alt='Phone Book' title='Phone Book'/>
            </div>
            <div className='search-container'>
                
            </div>
        </header>
    );
}

export default Header;