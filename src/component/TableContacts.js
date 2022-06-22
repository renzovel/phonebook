import React, { Component} from 'react';

class Contacts extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        const {listarContacts, list} =this.props;
        return(
            <div className="container-table">
            {list.length>0?list.map(function (data){
                return (
                <div key={data.id} className='row-table'>
                    <div>
                        <img onClick={()=>{listarContacts(data.id)}}  src={`https://ui-avatars.com/api/?background=random&name=${data.name}&color=FFFF`} alt={data.name} title={data.name} />
                    </div>
                    <div>
                        {data.name}
                    </div>
                    <div>
                        {data.phone}
                    </div>
                    <div>
                        {data.email}
                    </div>
                    <div>
                        opciones
                    </div>
                </div>)
            }): <div className='alert-cadastra'>Cadastra um novo contacto.</div>}
            </div>
        );
    }

}

export default Contacts;





