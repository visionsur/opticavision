import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


/*IMAGENES*/
import logo from '../imagenes/TIPO_DE_LENTES/ZERO/LOGO ADENTRO.png'
import SP35C3 from '../imagenes/TIPO_DE_LENTES/ZERO/SP35C3.png'
import SP20C1 from '../imagenes/TIPO_DE_LENTES/ZERO/SP20C1.png'
import SP04C3 from '../imagenes/TIPO_DE_LENTES/ZERO/SP04C3.png'
import SP11C5 from '../imagenes/TIPO_DE_LENTES/ZERO/SP11C5.png'
import SP63C3 from '../imagenes/TIPO_DE_LENTES/ZERO/SP63C3.png'
import SP62C3 from '../imagenes/TIPO_DE_LENTES/ZERO/SP62C3.png'
import SP61C4 from '../imagenes/TIPO_DE_LENTES/ZERO/SP61C4.png'


const Zero = () => {
  return (
    <div>
      <div class="div-cafe">
        <img class="img-logomatt" src={logo} />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row bsPrefix="lista-cafe">
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                SP35C3
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                SP20C1
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                SP04C3
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                SP11C5
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                SP63C3
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                SP62C3
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                SP61C4
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={SP35C3} />
                    <Card.Body>
                      <Card.Title>CREAM</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={SP20C1} />
                    <Card.Body>
                      <Card.Title>NEGRO</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={SP04C3} />
                    <Card.Body>
                      <Card.Title>DORADO</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card >
                    <Card.Img variant="top" src={SP11C5} />
                    <Card.Body>
                      <Card.Title>CREAM</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={SP63C3} />
                    <Card.Body>
                      <Card.Title>CAREY</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={SP62C3} />
                    <Card.Body>
                      <Card.Title>MARRÓN</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={SP61C4} />
                    <Card.Body>
                      <Card.Title>NEGRO MATE DEGRADEÉ</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
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

export default Zero;