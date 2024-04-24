import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const blogData = [
  {
    id: 1,
    image: require("../assets/images/blog1.jpg"),
    time: "03 April 2024",
    title: "Coffee Lovers",
    description:
      "Indulge in the rich aroma and flavors of coffee with our latest blog. Discover brewing tips, fascinating facts, and recipes to satisfy your caffeine cravings. Join us for a delightful journey!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/images/blog2.jpg"),
    time: "02 April 2024",
    title: "Tips for UI Design",
    description:
      "Discover essential UI design tips for creating intuitive, visually appealing user interfaces. From consistent branding to intuitive navigation, optimize your designs for a seamless user experience.",
    link: "https://www.google.com",
  },
  {
    id: 3,
    image: require("../assets/images/blog3.jpg"),
    time: "01 April 2024",
    title: "April's Fool",
    description:
    "April Fool's Day: Celebrating the Spirit of Playfulness! Explore the origins, global traditions, and modern-day pranks that make this holiday a lighthearted delight for all.",
    link: "https://www.google.com",
  },
];

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id} >
                <div className="holder">
                  <Card style={{ width: "20rem" }}>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>
                        {blog.description}
                      </Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                        Read More<i class="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
