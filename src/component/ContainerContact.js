import React, {useState, useEffect} from "react";
import {URLs, GET} from "../api/Api";
import Contacts from "./TableContacts";

function ContainerContact(){
    const [list, setList] = useState([]);

    useEffect(()=>{
      const resquest= GET(URLs.contacts);
      resquest.then((data)=>{
        if(data.length>0){
          setList(data);
        }
      });
    },[]);

    const listarContacts = (id)=>{
        setList((list)=>{
          return list.filter(row=>row.id!==id);
        });
    }
    return(
        <div className='ContainerContact'>
            <Contacts listarContacts={listarContacts} list={list} />
        </div>
    )
}
export default ContainerContact;