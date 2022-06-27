import React, { Component} from 'react';
import MyVerticallyCenteredModal from './bootstrap/Modal';

class Contacts extends Component{
    constructor(props){
        super(props);
        this.state={
            modalDeleteShow:false,
            modalReadShow:false,
            modalData:{}
        }
        this.modalDeleteShow=this.modalDeleteShow.bind(this);
        this.modalDeleteHiden=this.modalDeleteHiden.bind(this);
        this.modalReadShow=this.modalReadShow.bind(this);
        this.modalReadHiden=this.modalReadHiden.bind(this);
    }

    modalDeleteShow(data){
        this.setState({modalDeleteShow:true, modalData:data});
    }
    modalDeleteHiden(apagar){
        if(apagar){
            const {modalData} = this.state;
            const {deleteContacts} =this.props;
            deleteContacts(modalData.id);
        }
        this.setState({modalDeleteShow:false});
    }
    modalReadShow(data){
        this.setState({modalReadShow:true, modalData:data});
    }
    modalReadHiden(){
        this.setState({modalReadShow:false});
    }
    
    render(){
        const _this=this;
        const {editContacts, list} =_this.props;
        return(
            <>
            <MyVerticallyCenteredModal
                type={"DELETE"}
                title={"Apagar"}
                subtitle={"Você realmente deseja excluir?"}
                message={<p>{`Você excluirá o contato de "${this.state.modalData.name}" clica no botão "Concordo" se você realmente deseja excluí-lo.`}</p>}
                show={this.state.modalDeleteShow}
                onHide={this.modalDeleteHiden}
            />
            <MyVerticallyCenteredModal
                type={"READ"}
                title={"Ver"}
                subtitle={null}
                message={
                    <div style={{textAlign:'center'}}>
                        <img className='icon-show-contact' src={`https://ui-avatars.com/api/?background=random&name=${this.state.modalData.name}&color=FFFF&size=128`} alt={this.state.modalData.name} title={this.state.modalData.name} />
                        <p><strong>Nome</strong> : {this.state.modalData.name}</p>
                        <p><strong>Telefone</strong> : {this.state.modalData.phone}</p>
                        <p><strong>Email</strong> : {this.state.modalData.email}</p>
                    </div>
                }
                show={this.state.modalReadShow}
                onHide={this.modalReadHiden}
            />
            <div className="container-table">
            {list.length>0?list.map(function (data){
                return (
                <div key={data.id} className='row-table'>
                    <div onClick={()=>{_this.modalReadShow(data)}} style={{cursor:'pointer'}}>
                        <img src={`https://ui-avatars.com/api/?background=random&name=${data.name}&color=FFFF`} alt={data.name} title={data.name} />
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
                    <div className='content-icon'>
                        <div className='icon-editar'>
                            <svg onClick={(e)=>{editContacts(data)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </div>
                        <div className='icon-apagar'>
                            <svg onClick={()=>{_this.modalDeleteShow(data)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </div>
                    </div>
                </div>)
            }): <div className='alert-cadastra'>Cadastra um novo contacto.</div>}
            </div>
            </>
        );
    }

}

export default Contacts;





