import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import matt from '../imagenes/TIPO_DE_LENTES/MATT/logo afuera.png';
import ozono from '../imagenes/TIPO_DE_LENTES/OZONO/LOGO.png';
import ruta66 from '../imagenes/TIPO_DE_LENTES/RUTA66/LOGO.png'
import mohs from '../imagenes/TIPO_DE_LENTES/MOHS/logo afuera.png'
import kayak from '../imagenes/TIPO_DE_LENTES/KAYAK/LOGO.png'
import zero from '../imagenes/TIPO_DE_LENTES/ZERO/LOGO AFUERA.png'
import legacy from '../imagenes/TIPO_DE_LENTES/LEGACY/LOGOAFUERA.png'

import { CardGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const Variedad = () => {

    const navegacion=useNavigate();
    return (
        <CardGroup >
            <Row className="g-4">
                <Card border='Dark' bsPrefix="card" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={matt} />
                    <Card.Body>
                        <Card.Title>MATT</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRARAS UNA GRAN VARIEDAD DE LENTES MATT
                            </b>

                        </Card.Text>
                        <Button variant="primary" onClick={()=>navegacion('/matt')}>
                            VER
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={ozono} />
                    <Card.Body>
                        <Card.Title>OZONO</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRARAS UNA AMPLIA VARIEDAD DE LENTES OZONO
                            </b>

                        </Card.Text>
                        <Button variant="primary" onClick={()=>navegacion('/ozono')}>VER</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={ruta66} />
                    <Card.Body>
                        <Card.Title>RUTA 66</Card.Title>
                        <Card.Text >
                            <b>
                                EN ESTE SECTOR ENCONTRARAS VARIEDAD DE LENTES RUTA 66
                            </b>

                        </Card.Text>
                        <Button onClick={()=>navegacion('/ruta66')} variant="primary" >
                            VER
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={mohs} />
                    <Card.Body>
                        <Card.Title>MOHS</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRAR UNA ENORME VARIEDAD DE LENTES MOHS
                            </b>

                        </Card.Text>
                        <Button onClick={()=>navegacion('/mohs')}variant="primary" >
                            VER
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={kayak} />
                    <Card.Body>
                        <Card.Title>KAYAK</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRAR UNA ENORME VARIEDAD DE LENTES KAYAK
                            </b>

                        </Card.Text>
                        <Button onClick={()=>navegacion('/kayak')}variant="primary" >
                            VER
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={zero} />
                    <Card.Body>
                        <Card.Title>ZERO</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRAR UNA ENORME VARIEDAD DE LENTES ZERO
                            </b>

                        </Card.Text>
                        <Button onClick={()=>navegacion('/zero')}variant="primary" >
                            VER
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={legacy} />
                    <Card.Body>
                        <Card.Title>LEGACY</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRAR UNA ENORME VARIEDAD DE LENTES LEGACY
                            </b>

                        </Card.Text>
                        <Button onClick={()=>navegacion('/legacy')}variant="primary" >
                            VER
                        </Button>
                    </Card.Body>
                </Card>
            </Row>
        </CardGroup>
        

    )
}
export default Variedad;