import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/images/img1.jpg";

export default function AppAbout() {
  const html = 87;
  const responsive = 93;
  const bootstrap = 90;
  const react = 79;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} rounded />
          </Col>
          <Col sm={6}>
            <p>
              TechVerse is a dynamic tech company dedicated to pushing
              boundaries and creating innovative solutions. With a focus on
              cutting-edge technologies and forward-thinking strategies, we aim
              to revolutionize industries and empower businesses to thrive in
              the digital age.
            </p>

            <p>
              Discover how TechVerse is shaping the future of technology by
              visiting our website and exploring our range of services and
              solutions.
            </p>

            <div className='progress-block'>
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>RESPONSIVE</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>BOOTSTRAP / TAILSWIND CSS</h4>
              <ProgressBar now={bootstrap} label={`${bootstrap}%`} />
            </div>
            <div className='progress-block'>
              <h4>REACT</h4>
              <ProgressBar now={react} label={`${react}%`} />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
