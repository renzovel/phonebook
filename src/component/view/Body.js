import React from 'react';
import MenuLeft from '../MenuLeft';
import ContainerContact from '../ContainerContact';
function Body(props){
    const {search} = props;
    const createContact=()=>{
        console.log("agrega nuevo");
    }

    return (
        <main className='main-body'>
            <MenuLeft createContact={createContact}/> 
            <ContainerContact search={search}/>
        </main>
    );
}

export default Body;