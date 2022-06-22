import React, {useState} from "react";
import Contacts from "./TableContacts";

function ContainerContact(){
    const [list, setList] = useState([
        {
          "id": 1,
          "idUser":1,
          "name":"Ruan Linhares Vital",
          "phone":"+55(92)000000000",
          "email":"ruanlinares123@exemplo.com"
        },
        {
          "id": 2,
          "idUser":1,
          "name":"Shayan Mesquita Fontinha",
          "phone":"+55(92)000000000",
          "email":"shayan123@exemplo.com"
        },
        {
          "id": 3,
          "idUser":1,
          "name":"Elisama Camacho Maranhão",
          "phone":"+55(92)000000000",
          "email":"elisama123@exemplo.com"
        }
    ]);

    const listarContacts = (id)=>{
        setList([]);
    }
    return(
        <div className='ContainerContact'>
            <Contacts listarContacts={listarContacts} list={list} />
        </div>
    )
}
export default ContainerContact;