import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pno, setPno] = useState();
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  return (
    <section className="contact" id="feedback">
      <Container>
        <Row className="get-in-touch">
          <Col size={12} md={6}></Col>
          <Col size={12} md={6}>
            <div>
              <h2>FeedBack</h2>
              {/* onSubmit={handleSubmit} */}
              <form>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={fname}
                      placeholder="First Name"
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={lname}
                      placeholder="Last Name"
                      onChange={(e) => {
                        setLname(e.target.value);
                      }}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={email}
                      placeholder="Email Address"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={pno}
                      placeholder="Phone No."
                      onChange={(e) => {
                        setPno(e.target.value);
                      }}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={msg}
                      placeholder="Message"
                      onChange={(e) => {
                        setMsg(e.target.value);
                      }}
                    ></textarea>
                    <button type="submit">
                      <span>Send</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
