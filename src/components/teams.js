import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'

const teamsData = [
  {
    id: 1,
    image: require("../assets/images/team1.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Adam James",
    designation: "CEO",
    description:
      "I enjoy hiking in nature but dislike inefficiency and lack of accountability.",
  },
  {
    id: 2,
    image: require("../assets/images/team2.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Oluwatobi Adebayo",
    designation: "Managing Director",
    description:
      "I oversee strategic direction, operations, and ensure our team delivers excellence and innovation consistently.",
  },
  {
    id: 3,
    image: require("../assets/images/team3.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Emily Elizabeth",
    designation: "UX/UI Designer",
    description:
      "I bring creativity and empathy to enhance user experiences and elevate brand engagement effortlessly",
  },
  {
    id: 4,
    image: require("../assets/images/team4.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sophia Grace",
    designation: "Web Developer",
    description:
      "I am passionate about contributing my skills to enhance our company's digital presence and user experience.",
  },
  {
    id: 5,
    image: require("../assets/images/team5.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Benjamin Alexander",
    designation: "Data Scientist",
    description:
      "I explore patterns in information, uncover insights, and shape decisions, living a curious and analytical life.",
  },
  {
    id: 6,
    image: require("../assets/images/team6.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Ibrahim Michael",
    designation: "Software Engineer",
    description:
      "Crafting digital solutions, embracing innovation, and conquering coding challenges are integral to my fulfilling journey.",
  },
  {
    id: 7,
    image: require("../assets/images/team7.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Funmilayo Adekunle",
    designation: "HR Manager",
    description:
      "Leading with empathy, fostering team cohesion, and cultivating a culture of growth. Enjoys video games and reading.",
  },
  {
    id: 8,
    image: require("../assets/images/team8.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Chiamaka Okoro",
    designation: "Graphic Designer",
    description:
      "Building on years in the graphic design industry, Okoro’s approach is to drive tangible results.",
  },
];

export default function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our teams</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          {teamsData.map((teams) => {
            return (
              <Col sm={3} key={teams.id}>
                <div className="image">
                  <Image src={teams.image} alt="Image" rounded />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={teams.fbLink}><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href={teams.twitterLink}><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href={teams.linkedinLink}><i class="fab fa-linkedin-in"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>{teams.name}</h3>
                  <span className="designation">{teams.designation}</span>
                  <p>{teams.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
