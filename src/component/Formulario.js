import Form from 'react-bootstrap/Form';

export default function Formulario(props){
    if(props.formData){
      return (
          <Form>
            <Form.Group className="mb-3" controlId="inputName">
              <Form.Label>Nome :</Form.Label>
              <Form.Control type="text" placeholder="Nome do contato..." value={props.formData.name} onChange={(e)=>props.setFormData({...props.formData, name:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputPhone">
              <Form.Label>Telefone +(55):</Form.Label>
              <Form.Control type="tel"  value={props.formData.phone} onChange={(e)=>props.setFormData({...props.formData, phone:e.target.value})} placeholder="Numero de telefone..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>Email :</Form.Label>
              <Form.Control type="email"  value={props.formData.email} onChange={(e)=>props.setFormData({...props.formData, email:e.target.value})} placeholder="Email do contato..." />
            </Form.Group>
          </Form>
      );
    }else{
      return null;
    }
}