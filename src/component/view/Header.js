import React, {useEffect, useState} from "react";
import {Form} from 'react-bootstrap';
import Get from "../../api/Get";
import Logo from '../../asset/images/logo192.png';


function Header(){
    const style={
        logoContainer:{
            textAlign:'right',
            marginRight:5
        }
    }
    const [LogoUser, setLogoUser] = useState("https://ui-avatars.com/api/?background=227aee&name=Renzo+Veliz&color=FFFF");
    useEffect(()=>{
        const GitHub=Get('https://api.github.com/users/renzovel');
        GitHub.then((res)=>{
            setLogoUser(res.avatar_url);
        })
    },[]);
    return (
        <header className='Header'>
            <div className='logo-container'>
                <img src={Logo} alt='Phone Book' title='Phone Book'/>
                <span>Fone Book</span>
            </div>
            <div className='searchContainer'>
                <div className='searchContainer-input'>
                    <Form.Control
                        id='search'
                        name='search'
                        placeholder="Buscar contato..."
                        aria-label="search"
                        aria-describedby="search"
                        className={'Search'}
                     />
                </div>
                <div className='logo-container' style={style.logoContainer}>
                    <img src={LogoUser} alt='Phone Book' title='Phone Book'/>
                </div>
            </div>
        </header>
    );
}

export default Header;

