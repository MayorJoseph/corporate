import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

var testimonialsData = [
  {
    id: 1,
    name: "Olivia Rose",
    description:
      "TechVerse consistently delivers outstanding service, exceeding expectations every time. Their expertise, professionalism, and dedication make them a valuable partner in achieving our business goals. Highly recommended!",
    designation: "HR Manager",
  },
  {
    id: 2,
    name: "Olalekan Adeyemi",
    description:
      "TechVerse has exceeded our expectations with their exceptional service and innovative solutions. Their dedication to excellence and professionalism has earned them our highest recommendation and praise.",
    designation: "Manager",
  },
  {
    id: 3,
    name: "Ngozi Eze",
    description:
      "TechVerse embodies excellence in innovation and customer service. Their dedication to solving complex challenges with cutting-edge solutions sets them apart, ensuring our success and satisfaction every step of the way.",
    designation: "Executive Director",
  },
];

export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {testimonialsData.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className="name">{testimonials.name}</span>
                    <span className="designation">{testimonials.designation}</span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}
