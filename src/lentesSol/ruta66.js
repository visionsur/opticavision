

import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../imagenes/TIPO_DE_LENTES/RUTA66/LOGO.png";
import SKU00572 from "../imagenes/TIPO_DE_LENTES/RUTA66/SKU-00572.png";
import SKUO00616 from "../imagenes/TIPO_DE_LENTES/RUTA66/SKU-O00616.png"
import logoAdentro from "../imagenes/TIPO_DE_LENTES/RUTA66/LOGOADENTRO.png"

const Ruta66 = () => {
  return (
    <div>
      <div class="div-cafe">
        <img class="img-logomatt" src={logoAdentro} />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row bsPrefix="lista-cafe">
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                SKU-00572
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                SKU-O00616
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={SKU00572} />
                    <Card.Body>
                      <Card.Title>GRIS PLATA</Card.Title>
                      <Card.Text>Lentes de sol Polarizados</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={SKUO00616} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Lentes de sol Polarizados</Card.Text>
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

export default Ruta66;
