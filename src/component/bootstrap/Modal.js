
import {Modal, Button} from 'react-bootstrap';
export default function MyVerticallyCenteredModal(props) {
    const RenderButtom = ()=>{
        let render=null;
        switch(props.type){
            case "CREATE":
                render = (<><Button variant="secondary" onClick={()=>props.onHide(false)}>Cancelar</Button>
                    <Button  variant="primary" onClick={()=>props.onHide(true)}>Salvar</Button></>);
                break;
            case "READ":
                render = <Button variant="secondary" onClick={props.onHide}>Fechar</Button>;
                break;
            case "UPDATE":
                render = (<><Button variant="secondary" onClick={()=>props.onHide(false)}>Cancelar</Button>
                    <Button  variant="primary" onClick={()=>props.onHide(true)}>Salvar</Button></>);
                break;
            case "DELETE":
                render = (<><Button variant="secondary" onClick={()=>props.onHide(false)}>Cancelar</Button>
                    <Button  variant="primary" onClick={()=>props.onHide(true)}>Concordo</Button></>);
                break;
            default:
                break;
        }
        return render;
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.subtitle}</h4>
            {props.message}
        </Modal.Body>
        <Modal.Footer>
            {<RenderButtom />}
        </Modal.Footer>
      </Modal>
    );
}