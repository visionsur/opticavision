import LEGACY from "../imagenes/TIPO_DE_LENTES/LEGACY/LOGOADENTRO.png";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import LG1830 from "../imagenes/TIPO_DE_LENTES/LEGACY/LG1830.png";
import LG1833 from "../imagenes/TIPO_DE_LENTES/LEGACY/LG1833.png"
import LG1830col3 from "../imagenes/TIPO_DE_LENTES/LEGACY/LG1830 col-3.png"
import LG1830col2 from "../imagenes/TIPO_DE_LENTES/LEGACY/LG1830-col-2.png";
import LG1833col2 from "../imagenes/TIPO_DE_LENTES/LEGACY/LG1833 col.2.png";
import LG1833col1 from "../imagenes/TIPO_DE_LENTES/LEGACY/LG1833 col.1.png";
import Matt1201 from "../imagenes/TIPO_DE_LENTES/MATT/Matt - 1201.png";

const Matt = () => {
  return (
    <div>
      <div class="div-cafe">
        <img class="img-logomatt" src={LEGACY} />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row bsPrefix="lista-cafe">
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                LG1830 col.1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                LG1833
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                LG1830 col.3
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                LG1830 col.2
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                LG1833 col.2
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                LG1833 col.1
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={LG1830} />
                    <Card.Body>
                      <Card.Title>DORADOS</Card.Title>
                      <Card.Text>Protección UV400 POLARIZADOS</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={LG1833} />
                    <Card.Body>
                      <Card.Title>GRICES</Card.Title>
                      <Card.Text>Protección UV400 POLARIZADOS</Card.Text>
                    </Card.Body>
                  </Card>

                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={LG1830col3} />
                    <Card.Body>
                      <Card.Title>GRICES</Card.Title>
                      <Card.Text>Protección UV400 POLARIZADOS</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={LG1830col2} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Protección UV400 POLARIZADOS</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img src={LG1833col2} />
                    <Card.Body>
                      <Card.Title>DORADOS</Card.Title>
                      <Card.Text>Protección UV400 POLARIZADOS</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img  src={LG1833col1} />
                    <Card.Body>
                      <Card.Title>DORADOS</Card.Title>
                      <Card.Text>Protección UV400 POLARIZADOS</Card.Text>
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