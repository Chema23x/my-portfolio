import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Arvideys.png";
import projImg2 from "../assets/img/Hangman.png";
import projImg3 from "../assets/img/Clima-app.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Arvideys ecommerce",
      description: "Desarrollo de ecommerce",
      imgUrl: projImg1,
      index: 0
    },
    {
      title: "Juego: HangMan",
      description: "Creación simple del juego del ahorcado",
      imgUrl: projImg2,
      index: 1
    },
    {
      title: "App del clima",
      description: "Creacion de interfaz para consultar el clima",
      imgUrl: projImg3,
      index: 2
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Proyectos</h2>
                <p>¡Explora mi portafolio de proyectos destacados! <br></br> Cada aplicación busca abordar desafíos específicos con el fin de practicar las tecnologías aprendidas</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
