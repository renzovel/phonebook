import React from 'react';
import ContainerContact from '../ContainerContact';
function Body(props){
    const {search} = props;

    return (
        <main className='main-body'>
            <ContainerContact search={search}/>
        </main>
    );
}

export default Body;