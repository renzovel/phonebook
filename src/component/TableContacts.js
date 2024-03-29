import React, { Component} from 'react';
import MyVerticallyCenteredModal from './bootstrap/Modal';
import Formulario from './Formulario';

class TableContacts extends Component{
    constructor(props){
        super(props);
        this.state={
            modalDeleteShow:false,
            modalReadShow:false,
            modalUpdateShow:false,
            modalCreateShow:false,
            modalData:{},
            form:{
                id:'',
                name:'',
                phone:'',
                email:''
            }
            ,formValidate:{
                name:null,
                phone:null,
                email:null
            }
        }
        this.modalDeleteShow=this.modalDeleteShow.bind(this);
        this.modalDeleteHiden=this.modalDeleteHiden.bind(this);
        this.modalReadShow=this.modalReadShow.bind(this);
        this.modalReadHiden=this.modalReadHiden.bind(this);
        this.modalUpdateShow=this.modalUpdateShow.bind(this);
        this.modalUpdateHiden=this.modalUpdateHiden.bind(this);
        this.updateForm=this.updateForm.bind(this);
        this.modalCreateShow= this.modalCreateShow.bind(this);
        this.modalCreateHiden=this.modalCreateHiden.bind(this);
        this.setFormValidate=this.setFormValidate.bind(this);
        this.verifiForm=this.verifiForm.bind(this);
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
    modalUpdateShow(data){
        this.setState({modalUpdateShow:true, modalData:data, form:{
            id:data.id,
            name:data.name,
            phone:data.phone,
            email:data.email
        },
        formValidate:{
            name:null,
            phone:null,
            email:null
        }});
    }
    modalUpdateHiden(save){
        if(save){
            const {editContacts} =this.props;
            this.verifiForm(true, (result)=>{
                if(result){
                    this.setState({modalUpdateShow:false});
                    editContacts(this.state.form);
                }else{
                    return false;
                }
            });
        }else{
            this.setState({modalUpdateShow:false});
        }
    }
    updateForm(form){
        this.setState({form:form});
    }
    modalCreateShow(){
        this.setState({modalCreateShow:true, modalData:{}, 
        form:{
            id:'',
            name:'',
            phone:'',
            email:''
        },
        formValidate:{
            name:null,
            phone:null,
            email:null
        }});
    }
    modalCreateHiden(save){
        if(save){
            const {createContacts} =this.props;
            const newContact= this.state.form;
            delete newContact.id;
            this.verifiForm(false, (result)=>{
                if(result){
                    this.setState({modalCreateShow:false});
                    createContacts(newContact);
                }else{
                    return false;
                }
            });
        }else{
            this.setState({modalCreateShow:false});
        }
    }
    setFormValidate(formValidate){
        this.setState({formValidate:formValidate});
    }

    verifiForm(ignoraNull, callback){
        const {formValidate} = this.state;
        let result=true;
        for(let name in formValidate){
            if(formValidate[name]===false||(formValidate[name]===null&&!ignoraNull)){
                result=false;
                break;
            }
        }
        callback(result);
    }
    
    render(){
        const _this=this;
        const {list} =_this.props;
        return(
            <>
            <MyVerticallyCenteredModal
                type={"DELETE"}
                title={"Apagar"}
                subtitle={"Você realmente deseja excluir?"}
                message={<p>{`Você excluirá o contato de "`}<strong>{this.state.modalData.name}</strong>{`" clica no botão `}<strong>{`"Concordo"`}</strong>{` se você realmente deseja excluí-lo.`}</p>}
                show={this.state.modalDeleteShow}
                onHide={this.modalDeleteHiden}
            />
            <MyVerticallyCenteredModal
                type={"READ"}
                title={""}
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
            <MyVerticallyCenteredModal
                type={"UPDATE"}
                title={"Atualizar"}
                subtitle={""}
                message={<Formulario 
                    formData={this.state.form} 
                    setFormData={this.updateForm} 
                    formValidate={this.state.formValidate}
                    setFormValidate={this.setFormValidate}
                    />}
                show={this.state.modalUpdateShow}
                onHide={this.modalUpdateHiden}
            />
            <MyVerticallyCenteredModal
                type={"CREATE"}
                title={"Criar contato"}
                subtitle={""}
                message={<Formulario 
                    formData={this.state.form} 
                    setFormData={this.updateForm} 
                    formValidate={this.state.formValidate}
                    setFormValidate={this.setFormValidate}
                    />}
                show={this.state.modalCreateShow}
                onHide={this.modalCreateHiden}
            />
            <div className="container-table">
            {list.length>0?list.map(function (data){
                return (
                <div key={data.id} className='row-table'>
                    <div onClick={()=>{_this.modalReadShow(data)}} style={{cursor:'pointer'}}>
                        <img src={`https://ui-avatars.com/api/?background=random&name=${data.name}&color=FFFF`} alt={data.name} title={data.name} />
                    </div>
                    <div className='limit-tex capitalize' onClick={()=>{_this.modalReadShow(data)}} style={{maxWidth: '30%'}}>
                        {data.name}
                    </div>
                    <div className='limit-tex' onClick={()=>{_this.modalReadShow(data)}}>
                        {data.phone}
                    </div>
                    <div className='limit-tex lowercase' onClick={()=>{_this.modalReadShow(data)}}>
                        {data.email}
                    </div>
                    <div className='content-icon'>
                        <div className='icon-editar'>
                            <svg onClick={(e)=>{_this.modalUpdateShow(data)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </div>
                        <div className='icon-apagar'>
                            <svg onClick={(e)=>{_this.modalDeleteShow(data)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
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

export default TableContacts;





