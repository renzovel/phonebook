import React, {useEffect, useState} from "react";
import {Form, FloatingLabel} from 'react-bootstrap';
import {URLs, GET} from "../../api/Api";
import Logo from '../../asset/images/logo192.png';


function Header(props){
    const {search} = props; 
    const style={
        logoContainer:{
            textAlign:'right',
            marginRight:5
        }
    }
    const [LogoUser, setLogoUser] = useState(URLs.defaultUser);
    useEffect(()=>{
        const GitHub=GET(URLs.user);
        GitHub.then((res)=>{
            setLogoUser(res.avatar_url);
        })
    },[props]);
    
    return (
        <header className='Header'>
            <div className='logo-container'>
                <img src={Logo} alt='Phone Book' title='Phone Book'/>
                <span>Fone Book</span>
            </div>
            <div className='searchContainer'>
                <div className='searchContainer-input'>
                    <FloatingLabel controlId="search" label="Buscar contato...">
                        <Form.Control
                            name='search'
                            placeholder="Buscar contato..."
                            aria-label="search"
                            aria-describedby="search"
                            className={'Search'}
                            onChange={(e)=>{search(e.target.value)}}
                            size={50}
                        />
                    </FloatingLabel>
                </div>
                <div className='logo-container content-foto-user' style={style.logoContainer}>
                    <img src={LogoUser} alt='Phone Book' title='Phone Book'/>
                </div>
            </div>
        </header>
    );
}

export default Header;

