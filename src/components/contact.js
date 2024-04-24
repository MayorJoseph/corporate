import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email ddress"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your message"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Sumbit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.031737596086!2d3.3494074554199216!3d6.614842100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f00f8355d1%3A0xa40f50a7821567ba!2sDiamond%20Estate%20Magodo!5e0!3m2!1sen!2sng!4v1712917730073!5m2!1sen!2sng" allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i class="fas fa-envelope"></i>
              techverse@info.com
            </li>
            <li>
              <i class="fas fa-phone"></i>
              080-451-3849
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              Ketu, Lagos
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
