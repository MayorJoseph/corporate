import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../assets/images/img-hero1.jpg"),
    title: "The Awesome Design for Your Website",
    description:
      "Crafting innovative designs for your website that captivate audiences, enhance user experience, and elevate your brand to new heights. Let's create something extraordinary together.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/images/img-hero2.jpg"),
    title: "Start Your Future Financial Plan",
    description:
      "We offer expert guidance and personalized strategies to help individuals navigate their financial goals. Secure your tomorrow with our tailored solutions and wealth management expertise.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/images/img-hero3.jpg"),
    title: "Enjoy the Difference",
    description:
      "We redefine tech solutions, delivering excellence and uniqueness in every aspect of our services.",
    link: "https://www.twitter.com",
  },
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"Slide" + hero.id}
              />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i class="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
