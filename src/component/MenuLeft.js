import {Button} from 'react-bootstrap';
function MenuLeft(props){
    return(
        <aside className='MenuLeft'>
            <div className="d-grid gap-2">
                <Button className='btn-criar-contacts' variant="success" size="lg">
                    Criar Contato
                </Button>
            </div>
        </aside>
    )
}
export default MenuLeft;