
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


/*IMAGENES*/
import logo from '../imagenes/TIPO_DE_LENTES/MOHS/logo dentro.png'
import fivehundred from '../imagenes/TIPO_DE_LENTES/MOHS/five_hundred_.png'
import mitt from '../imagenes/TIPO_DE_LENTES/MOHS/mitt_c1.png'
import bigone from '../imagenes/TIPO_DE_LENTES/MOHS/bigone.png'
import california from '../imagenes/TIPO_DE_LENTES/MOHS/bigone.png'
import twohundred from '../imagenes/TIPO_DE_LENTES/MOHS/twohundred.png'
import muster from '../imagenes/TIPO_DE_LENTES/MOHS/s_muster.png'
import beauty from '../imagenes/TIPO_DE_LENTES/MOHS/s_beauty.png'


const Mohs = () => {
  return (
    <div>
      <div class="div-cafe">
        <img class="img-logo" src={logo} />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row bsPrefix="lista-cafe">
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                FIVE HUNDRED
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                MITT
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                BIGONE
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                CALIFORNIA
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                TWO HUNDRED
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                MUSTER
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                BEAUTY
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={fivehundred} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Anteojos Sol Mohs Espejados Polarizados Uv400</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={mitt} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Anteojos De Sol Polarized Tamaño Xl</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={bigone} />
                    <Card.Body>
                      <Card.Title>MARRON</Card.Title>
                      <Card.Text>Anteojos De Sol Polarized Marrón Tamaño Xl</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card >
                    <Card.Img variant="top" src={california} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Policarbonato Polarizado Uv400</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={twohundred} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Anteojos Polarizados Espejados Uv400</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={muster} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Anteojos Sol Polarizados Uv400 Gtia</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={beauty} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Anteojos Sol Polarizados Uv400 Gtia</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Mohs;
