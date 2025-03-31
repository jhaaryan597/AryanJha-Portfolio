import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

const projects = [
    
  ];  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Innovative solutions crafted with precision—exploring the power of Flutter, Web3, and full-stack development. Check out my latest projects!🚀</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <p>
  <h3>Sahaya</h3>
  <p><strong>Disaster Relief App</strong></p>
  
  <li> ✅ Sahaya An innovative disaster relief app enhancing community resilience against climate crises. </li>

  <li>✅ Bridges the Gap Connects those in need with willing helpers during natural disasters.</li>

  <li>✅ User-Friendly Platform Designed for individuals, NGOs, and emergency responders.</li>

  <li>✅ Empowers Communities Encourages active participation in disaster relief efforts.</li>

  <li>✅ Enhances Preparedness Promotes readiness before disasters strike.</li>

  <li>✅ Facilitates Quick Response Speeds up aid distribution and communication.</li>

  <li>✅ Strengthens Collaboration Builds a strong network for efficient disaster management.</li>


                    </p>  
                  </Nav>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <p>
  <h3>We Chat</h3>
  <p><strong>Fast & Secure Real-time Messaging App</strong></p>

    <li>✅ Display only known users or contacts</li>
    <li>✅ Real-time messaging powered by Firebase</li>
    <li>✅ Google Sign-In (no account or phone number needed)</li>
    <li>✅ Add users by email ID</li>
    <li>✅ Simple user profiles (photo, about, last-seen)</li>
    <li>✅ Message read status & notifications</li>
    <li>✅ Edit & delete messages anytime</li>
    <li>✅ AI Chat Bot (Google Gemini) integration</li>
    <li>✅ Sleek UI with the latest Material Widgets</li>


                    </p>  
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    
                    <Tab.Pane eventKey="chatQwik">
  <h3>ChatQwik</h3>
  <p><strong>Fast & Secure Real-time Messaging App</strong></p>
  <ul>
    <li>✅ Display only known users or contacts</li>
    <li>✅ Real-time messaging powered by Firebase</li>
    <li>✅ Google Sign-In (no account or phone number needed)</li>
    <li>✅ Add users by email ID</li>
    <li>✅ Simple user profiles (photo, about, last-seen, created-at)</li>
    <li>✅ Message read status & notifications</li>
    <li>✅ Edit & delete messages anytime</li>
    <li>✅ AI Chat Bot (Google Gemini) integration</li>
    <li>✅ Sleek UI with the latest Material Widgets</li>
  </ul>
</Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
