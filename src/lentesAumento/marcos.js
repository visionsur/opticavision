

import { CardGroup, Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import marco1 from '../imagenes/TIPO_DE_LENTES/marcos/marco1.png';
import marco2 from '../imagenes/TIPO_DE_LENTES/marcos/marco2.png';
import marco3 from '../imagenes/TIPO_DE_LENTES/marcos/marcos3.jpg';
import marco4 from '../imagenes/TIPO_DE_LENTES/marcos/marco4.jpg';
import marco5 from '../imagenes/TIPO_DE_LENTES/marcos/marco5.webp';

const Marcos = () => {

    const navegacion = useNavigate();
    return (
        <div>
            <div className='cartas'>
            <Card bg="info" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={marco1} />
                    <Card.Body>
                        <Card.Title>ANTEOJO DACIL ATENAS</Card.Title>
                        <Card.Text>
                            <b>Color Negro combinado con gris</b>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={marco2} />
                    <Card.Body>
                        <Card.Title>ARMAZON OZONO Oz-5010</Card.Title>
                        <Card.Text>
                            <b>Color C2</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
            <div>
            <Card bg="info" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={marco3} />
                    <Card.Body>
                        <Card.Title>MOSCU</Card.Title>
                        <Card.Text>
                            <b>Color Negro</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={marco4} />
                    <Card.Body>
                        <Card.Title>NOAH</Card.Title>
                        <Card.Text>
                            <b>Caramelo Mate</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

        

    )
}
export default Marcos;