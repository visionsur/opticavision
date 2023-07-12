import Accordion from 'react-bootstrap/Accordion';
import logo from '../imagenes/LOGO/logooptica.png'
import { useState } from 'react';


const Nosotros = () => {
    const [activeKey, setActiveKey] = useState(null); // Estado para controlar los elementos abiertos

    const handleAccordionToggle = (eventKey) => {
      setActiveKey(eventKey === activeKey ? null : eventKey);
    }
    return (

        <div className="accordion-padre">
            <Accordion activeKey={activeKey} onSelect={handleAccordionToggle}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >¿QUIÉNES SOMOS?</Accordion.Header>
                    <Accordion.Body>
                        Con más de 15 años de trayectoria, somos una óptica ubicada en San Rafael,
                        Mendoza, dedicada a brindar servicios completos de graduación y venta de
                        todo tipo de lentes. Nuestro compromiso es cuidar de tu salud visual y
                        proporcionarte soluciones visuales de calidad para que puedas disfrutar de
                        una visión clara y nítida
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>¿QUÉ INCLUYEN NUESTROS SERVICIOS?</Accordion.Header>
                    <Accordion.Body>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header >Graduación de lentes:</Accordion.Header>
                            <Accordion.Body>
                                Utilizando tecnología de vanguardia, ofrecemos servicios de
                                graduación precisos para lentes de aumento y lentes progresivas, asegurando una visión
                                óptima y una experiencia visual cómoda.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header >Lentes de sol:</Accordion.Header>
                            <Accordion.Body>
                                Disponemos de una amplia selección de lentes de sol de marcas reconocidas,
                                ofreciendo protección contra los rayos UV y un estilo excepcional. Nuestro equipo te ayudará
                                a encontrar el par perfecto que se adapte a tu estilo y necesidades.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header >Lentes de contacto:</Accordion.Header>
                            <Accordion.Body>
                                Si prefieres la comodidad de los lentes de contacto, ofrecemos opciones
                                de lentes suaves, permeables al gas y de uso diario o prolongado. Nuestros especialistas te
                                brindarán asesoramiento personalizado y te ayudarán a encontrar la opción más adecuada para ti.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header > Accesorios y cuidado ocular:</Accordion.Header>
                            <Accordion.Body>
                                También ofrecemos una variedad de accesorios para el cuidado de tus
                                lentes, así como productos para el cuidado y la salud de tus ojos. Nuestro objetivo es proporcionarte
                                soluciones integrales para mantener tus ojos sanos y protegidos.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header >UBICACIÓN</Accordion.Header>
                    <Accordion.Body>
                        <center>
                        Estamos ubicados en San Rafael, Mendoza, en una zona de fácil acceso. Con más de 15 años de experiencia,
                        nos hemos convertido en una opción confiable para el cuidado de la visión en nuestra comunidad. Ven a
                        visitarnos en:<br />

                        Av. Hipólito Yrigoyen 68<br />
                        San Rafael, Mendoza<br />
                        Argentina
                        </center>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>


    );
};

export default Nosotros;
