import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


/*IMAGENES*/
import logo from '../imagenes/TIPO_DE_LENTES/KAYAK/LOGO ADENTRO.png'
import MOD_K853 from '../imagenes/TIPO_DE_LENTES/KAYAK/MOD.K853.png'
import MOD_K853C1 from '../imagenes/TIPO_DE_LENTES/KAYAK/MOD.K853C1.png'
import MOD_K_851C3 from '../imagenes/TIPO_DE_LENTES/KAYAK/MOD.K-851C3.png'
import MOD_K8088C7 from '../imagenes/TIPO_DE_LENTES/KAYAK/MOD.K8088 C7.png'
import MOD_K8088C1 from '../imagenes/TIPO_DE_LENTES/KAYAK/MOD. K 8088C1.png'
import MOD_K943C1 from '../imagenes/TIPO_DE_LENTES/KAYAK/MOD K943 C1.png'
import MOD_K937C2 from '../imagenes/TIPO_DE_LENTES/KAYAK/MOD K937 C2.png'


const Kayak = () => {
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
                MOD.K853 C3
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                MOD.K853 C1
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                MOD.K-851 C3
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                MOD. K8088 C7
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                MOD. K 8088 C1
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                MOD K943 C1
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                MOD K937 C2
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={MOD_K853} />
                    <Card.Body>
                      <Card.Title>NEGRO</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={MOD_K853C1} />
                    <Card.Body>
                      <Card.Title>DORADO</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={MOD_K_851C3} />
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
                    <Card.Img variant="top" src={MOD_K8088C7} />
                    <Card.Body>
                      <Card.Title>TRASLUCIDO</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={MOD_K8088C1} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={MOD_K943C1} />
                    <Card.Body>
                      <Card.Title>DORADO</Card.Title>
                      <Card.Text>SIN GÉNERO</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={MOD_K937C2} />
                    <Card.Body>
                      <Card.Title>DORADO</Card.Title>
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

export default Kayak;