import React, {useState, useEffect} from "react";
import {URLs, GET, DELETE, PUT} from "../api/Api";
import Contacts from "./TableContacts";
import  ImageBoton  from "../asset/images/boton_da_diversidade.png";

function ContainerContact(props){
    const {search} = props;
    const [list, setList] = useState([]);
    const loadContacts=()=>{
      const resquest= GET(URLs.contacts);
      resquest.then((data)=>{
        if(data.length>0){
          setList(data);
        }else{
          setList([]);
        }
      });
    }
    useEffect(()=>{
      if(search.length>0){
        const resquest= GET(URLs.searchContacts+search);
        resquest.then((data)=>{
          if(data.length>0){
            setList(data);
          }
        });
      }else{
        loadContacts();
      }
    },[search]);
    const deleteContacts = async (id)=>{
      const resquest= await DELETE(URLs.contacts+`/${id}`);
      if(search.length>0){
        const newResquest= GET(URLs.searchContacts+search);
        newResquest.then((data)=>{
          if(data.length>0){
            setList(data);
          }
        });
      }else{
        loadContacts();
      }      
      return resquest;
    }

    const editContacts=(data)=>{
      const newResquest= PUT(URLs.putContacts+data.id, data);
      newResquest.then((data)=>{
        console.log(data);
        loadContacts();
      });
    }

    return(
        <div className='ContainerContact'>
            <Contacts editContacts={editContacts} deleteContacts={deleteContacts} list={list} />
            <div className='btnInsertContact'>
              <img src={ImageBoton} alt="Criar novo contato." title="Criar novo contato." />
              <span>+</span>
            </div>
        </div>
    )
}
export default ContainerContact;