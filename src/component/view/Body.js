import React from 'react';
import MenuLeft from '../MenuLeft';
import ContainerContact from '../ContainerContact';
function Body(props){
    const {search} = props;
    return (
        <main className='main-body'>
            <MenuLeft/>
            <ContainerContact search={search}/>
        </main>
    );
}

export default Body;