import MATT from "../imagenes/TIPO_DE_LENTES/MATT/LOGO.png";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Matt944 from "../imagenes/TIPO_DE_LENTES/MATT/Matt - 944.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Matt9892 from "../imagenes/TIPO_DE_LENTES/MATT/Matt - 9892.png"
import Matt165 from "../imagenes/TIPO_DE_LENTES/MATT/Matt - 165.png";
import Matt1001 from "../imagenes/TIPO_DE_LENTES/MATT/Matt - 1001.png";
import Matt512 from "../imagenes/TIPO_DE_LENTES/MATT/Matt - 512.png";
import Reef259 from "../imagenes/TIPO_DE_LENTES/MATT/Reef - 259.png";
import Matt1201 from "../imagenes/TIPO_DE_LENTES/MATT/Matt - 1201.png";

const Matt = () => {
  return (
    <div>
      <div class="div-cafe">
        <img class="img-logomatt" src={MATT} />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row bsPrefix="lista-cafe">
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Matt - 944
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Matt - 9892
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Matt - 165
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Matt - 1001
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Matt - 512
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                Reef - 259
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                Matt - 1201
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={Matt944} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>SKU C178959 -Categoría-Anteojos de Sol</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={Matt9892} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>SKU C178958 - Categoría Anteojos de Sol</Card.Text>
                    </Card.Body>
                  </Card>

                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={Matt165} />
                    <Card.Body>
                      <Card.Title>MARRON</Card.Title>
                      <Card.Text>Anteojo frente moteado con cristales semi espejados polarizados diseño de mujer con todo en calidad en cristales aporta bloqueo en todas las direcciones tamaño grande modernos</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={Matt1001} />
                    <Card.Body>
                      <Card.Title>Matt - 1001</Card.Title>
                      <Card.Text>Anteojo de sol envolvente protege en los laterales patilla ancha cristales con proteccion uv uva</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img src={Matt512} />
                    <Card.Body>
                      <Card.Title>PLATEADA</Card.Title>
                      <Card.Text>SKU: C178952 - Categoría: Anteojos de Sol</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img  src={Reef259} />
                    <Card.Body>
                      <Card.Title>CLASICO</Card.Title>
                      <Card.Text>Ray-Ban New Wayfarer Classic RB2132 - Green - Cristal - Clásica - Polished black - Nailon - Polished black - Nailon - Extra large (Incluye: Con lente polarizada)</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={Matt1201} />
                    <Card.Body>
                      <Card.Title>CLASICO</Card.Title>
                      <Card.Text>Lentes De Sol Rb2447 Round Fleck 1160 - Talle M Estándar</Card.Text>
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

export default Matt;
