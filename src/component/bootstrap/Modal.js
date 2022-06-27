
import {Modal, Button} from 'react-bootstrap';
export default function MyVerticallyCenteredModal(props) {
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
          <p>
            {props.message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.onHide(false)}>Cancelar</Button>
          <Button  variant="primary" onClick={()=>props.onHide(true)}>Concordo</Button>
        </Modal.Footer>
      </Modal>
    );
}