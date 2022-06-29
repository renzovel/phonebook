import React, { useState, useEffect, useRef } from "react";
import { URLs, GET, DELETE, PUT, POST } from "../api/Api";
import TableContacts from "./TableContacts";
import ImageBoton from "../asset/images/boton_da_diversidade.png";
import MenuLeft from './MenuLeft';




function ContainerContact(props) {
  const { search } = props;
  const [list, setList] = useState([]);
  const [loadingInit, setLoadingInit] = useState(true);

  const refContacts = useRef(null);
  const loadContacts = () => {
    const resquest = GET(URLs.contacts);
    resquest.then((data) => {
      if (data.length > 0) {
        setList(data);
      } else {
        setList([]);
      }
      setLoadingInit(false);
    });
  }
  useEffect(() => {
    if (search.length > 0) {
      const resquest = GET(URLs.searchContacts + search);
      resquest.then((data) => {
        if (data.length > 0) {
          setList(data);
        } else {
          setList([]);
        }
      });
    } else {
      loadContacts();
    }
  }, [search]);
  const deleteContacts = async (id) => {
    const resquest = await DELETE(URLs.deleteContacts + `/${id}`);
    if (search.length > 0) {
      const newResquest = GET(URLs.searchContacts + search);
      newResquest.then((data) => {
        if (data.length > 0) {
          setList(data);
        }
      });
    } else {
      loadContacts();
    }
    return resquest;
  }

  const editContacts = (data) => {
    const newResquest = PUT(URLs.putContacts + data.id, data);
    newResquest.then((data) => {
      loadContacts();
    });
  }

  const createContact = (data) => {
    const newResquest = POST(URLs.postContacts, data);
    newResquest.then((data) => {
      loadContacts();
    });
  }

  return (
    <>
      <MenuLeft createContactShow={() => refContacts.current.modalCreateShow()} /> 
      <div className='ContainerContact'>
        {loadingInit&&
          <div className="loading"></div>
        }
        <TableContacts 
          ref={refContacts} 
          editContacts={editContacts} 
          deleteContacts={deleteContacts} 
          createContacts={createContact} 
          list={list} />
        <div className='btnInsertContact'>
          <img src={ImageBoton} alt="Criar novo contato." title="Criar novo contato." />
          <span onClick={() => refContacts.current.modalCreateShow()}>+</span>
        </div>
      </div>
    </>
  )
}
export default ContainerContact;