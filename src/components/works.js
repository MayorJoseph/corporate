import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: require("../assets/images/img2.jpg"),
    title: "Meeting Video Call",
    subtitle: "Web Design",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: require("../assets/images/img3.jpg"),
    title: "Photographer",
    subtitle: "Branding",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: require("../assets/images/img4.jpg"),
    title: "UI/UX",
    subtitle: "Web Design",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: require("../assets/images/img5.jpg"),
    title: "Meeting Room",
    subtitle: "Branding",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: require("../assets/images/img6.jpg"),
    title: "Build",
    subtitle: "Photography",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: require("../assets/images/img7.jpg"),
    title: "Growth Business",
    subtitle: "Web Design",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: require("../assets/images/img8.jpg"),
    title: "HardWork",
    subtitle: "Branding",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: require("../assets/images/img9.jpg"),
    title: "Solved Peoblem",
    subtitle: "Photography",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: require("../assets/images/img10.jpg"),
    title: "Events",
    subtitle: "Web Design",
  },
];

let active = 2;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

export default function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className="portfoliolist">
          {worksData.map((works) => {
            return (
              <Col sm={4} key={works.id}>
                <div className="portfolio-wrapper">
                  <a href={works.link}>
                    <Image src={works.image} rounded />
                    <div className="label text-center">
                      <h3>{works.title}</h3>
                      <p>{works.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
      <div className="box-area">
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
