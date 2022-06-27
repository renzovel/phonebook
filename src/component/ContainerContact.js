import React, {useState, useEffect} from "react";
import {URLs, GET, DELETE} from "../api/Api";
import Contacts from "./TableContacts";

function ContainerContact(props){
    const {search} = props;
    const [list, setList] = useState([]);
    const loadContacts=()=>{
      const resquest= GET(URLs.contacts);
      resquest.then((data)=>{
        if(data.length>0){
          setList(data);
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

    const editContacts=(id)=>{
      console.log(id);
    }


    
    return(
        <div className='ContainerContact'>
            <Contacts editContacts={editContacts} deleteContacts={deleteContacts} list={list} />
        </div>
    )
}
export default ContainerContact;