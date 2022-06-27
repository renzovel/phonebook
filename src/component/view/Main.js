import React,{useState} from 'react';
import Header from './Header';
import Body from './Body';
function App() {
  const [value, setValue]=useState('');
  const buscar=(value)=>{
    setValue(()=>{
      return value;
    })
  };
  return (
    <div className='Main'>
        <Header search={buscar} />
        <Body search={value}  />
    </div>
  );
}

export default App;
