import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

export default function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">
        &copy; 2024 Techverse. All Right Reserved.
      </div>
      <div className="socials">
        <li>
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </div>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
}