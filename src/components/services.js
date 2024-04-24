import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Responsive Design",
    description:
      "We ensure seamless user experiences across all devices by optimizing websites to adapt fluidly to various screen sizes and resolutions, enhancing accessibility and engagement for all users.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Creative Design",
    description:
      "Offering innovative solutions tailored to your brand's unique identity, we elevate your visual presence with our expert design team, unlocking new possibilities for you today.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "SEO Optimized",
    description:
      "Our services guarantee heightened online visibility, amplified organic traffic, and elevated search engine rankings, empowering your business to flourish in the digital landscape.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Retina Ready",
    description:
      "Experience our premium design services, delivering crisp and vibrant visuals for your digital content. Elevate your online presence with pixel-perfect clarity and stunning graphics tailored to your brand.",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Brower Compatibility",
    description:
      "We ensure seamless functionality across major browsers, guaranteeing optimal user experience and accessibility for your website or web application. Trust us to deliver reliable compatibility solutions for enhanced performance.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Customer Support",
    description:
      "We guarantee timely assistance and swift resolution for all inquiries, fostering seamless communication and ensuring utmost satisfaction for your customers. This approach cultivates enduring relationships and enhances brand loyalty exponentially.",
  },
];

export default function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
              <Col sm={4} className="holder" key={services.id}>
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
