
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import marco1 from '../imagenes/TIPO_DE_LENTES/marcos/marco1.png';
import marco2 from '../imagenes/TIPO_DE_LENTES/marcos/marco2.png';
import marco3 from '../imagenes/TIPO_DE_LENTES/marcos/marcos3.jpg';
import marco4 from '../imagenes/TIPO_DE_LENTES/marcos/marco4.jpg';
import marco5 from '../imagenes/TIPO_DE_LENTES/marcos/marco5.webp';
import { CardGroup } from 'react-bootstrap';


function ShapeExample() {
    
    return (
        <div >
            <div className='cartas'>
            <Card>
                    <Card.Img variant="top" src={marco1} />
                    <Card.Body>
                        <Card.Text>
                            ANTEOJO DACIL ATENAS
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="bottom" src={marco2} />
                    <Card.Body>
                        <Card.Text>
                            ARMAZON OZONO Oz-5010
                        </Card.Text>
                    </Card.Body>

                </Card>
            </div>
            <div className='cartas'>
            <Card>
                    <Card.Img variant="top" src={marco3} />
                    <Card.Body>
                        <Card.Text>
                            MOSCU
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="bottom" src={marco4} />
                    <Card.Body>
                        <Card.Text>
                            NOAH
                        </Card.Text>
                    </Card.Body>

                </Card>
            </div>
                
                
        </div>


    );
}

export default ShapeExample;