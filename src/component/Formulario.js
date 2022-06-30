import Form from 'react-bootstrap/Form';
import validator from 'validator';

export default function Formulario(props){
    const style =  {
      txtErro:{
        color:"Red"
      },
      txtSucess:{
        color:"green"
      }
    }
    const Validation=({valid, msgError, msgSucess})=>{
      if (valid===false) {
        return(<span style={style.txtErro}>{msgError}</span>);
      }else if(valid===true){
        return(<span style={style.txtSucess}>{msgSucess?msgSucess:"Sucesso!"}</span>);
      }else{
        return null;
      }
      
    }
    const validar={
      required:(value, compare)=>{
        if(value.length>0)
          return true;
        else
          return false;
      },
      min:(value, compare)=>{
        if(value.length>compare)
          return true;
        else
          return false;
      },
      max:(value, compare)=>{
        if(value.length<compare)
          return true;
        else
          return false;
      },
      email:(value, compare)=>{
        if (validator.isEmail(value)===compare)
          return true;
        else
          return false;
      },
      phone:(value, compare)=>{
        if(validator.isMobilePhone(value,"pt-BR")===compare)
          return true;
        else
          return false;
      },
      name:(value, compare)=>{
        if((validator.isAlpha(value.replace(/ /g, ""),"pt-BR")===compare)
          &&value.split(" ").length<=4)
          return true;
        else
          return false;
      }
    }
    const validation=(event,config)=>{
      const {value, id:name}=event.target;
      let valid=true;
      for(let option in config){
        if(!validar[option](value, config[option])){
          valid=false;
          break;
        }
      }
      if(valid){
        props.setFormValidate({...props.formValidate, [name]:true});
      }else{
        props.setFormValidate({...props.formValidate, [name]:false});
      }
    }
    if(props.formData){
      return (
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome :</Form.Label>
              <Form.Control type="text" placeholder="Nome do contato..." value={props.formData.name} 
              onChange={(e)=>{
                props.setFormData({...props.formData, name:e.target.value}) 
                validation(e, {
                  required:true,
                  min:4,
                  max:40,
                  name:true
                })
              }} 
              onBlur={(e)=>validation(e, {
                required:true,
                min:4,
                max:40,
                name:true
              })} />
              <Validation valid={props.formValidate.name} msgError="Nome errado!" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Telefone +(55):</Form.Label>
              <Form.Control type="tel"  value={props.formData.phone} 
              onChange={(e)=>{
                props.setFormData({...props.formData, phone:e.target.value})
                validation(e, {
                  required:true,
                  phone:true
                })
              }} 
              onBlur={(e)=>validation(e, {
                required:true,
                phone:true
              })}
              placeholder="Numero de telefone..." />
              <Validation valid={props.formValidate.phone} msgError="Telefone errado!" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email :</Form.Label>
              <Form.Control type="email"  value={props.formData.email} 
              onChange={(e)=>{
                props.setFormData({...props.formData, email:e.target.value})
                validation(e, {
                  required:true,
                  email:true
                })
              }}
              onBlur={(e)=>validation(e, {
                  required:true,
                  email:true
              })}
              placeholder="Email do contato..." />
              <Validation valid={props.formValidate.email} msgError="Email errado!" />
            </Form.Group>
          </Form>
      );
    }else{
      return null;
    }
}

