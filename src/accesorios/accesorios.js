
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import estuche from '../imagenes/ACCESORIOS/estuche.png'
import sujetador from '../imagenes/ACCESORIOS/sujetador.png'
import sujetadoriman from '../imagenes/ACCESORIOS/sujetadoriman.png'
import sujetadorsilicona from '../imagenes/ACCESORIOS/sujetadorsilicona.png'
import { CardGroup } from 'react-bootstrap';


function Accesorios() {

  return (
    <div>
      <div className='cartas'>
        <Card>
          <Card.Img variant="top" src={estuche} />
          <Card.Body>
            <Card.Text>
              ESTUCHE PARA LENTES DE CONTACTO
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img variant="bottom" src={sujetador} />
          <Card.Body>
            <Card.Text>
              SUJETADOR LENTES DEPORTIVOS
            </Card.Text>
          </Card.Body>

        </Card>
      </div>
      <div className='cartas'>
        <Card>
          <Card.Img variant="top" src={sujetadoriman} />
          <Card.Body>
            <Card.Text>
              SUJETA LENTES DE IMÁN
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img variant="bottom" src={sujetadorsilicona} />
          <Card.Body>
            <Card.Text>
              SUJETADOR SILICONA
            </Card.Text>
          </Card.Body>

        </Card>
      </div>

    </div>


  );
}

export default Accesorios;