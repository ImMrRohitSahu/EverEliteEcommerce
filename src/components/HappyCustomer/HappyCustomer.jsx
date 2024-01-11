import { Col, Container, Row } from "react-bootstrap"

const HappyCustomer = () => {
  return (
    <Container fluid className="p-0 my-5">
        <Row className="m-0 p-0">
            <Col className="m-0 p-0">
                <div className="happy-customer d-flex justify-content-center align-items-center" style={{background: `url("src/assets/happycustomer.jpg")`}}>
                   <h3 className="fw-bold text-light mb-0 text-special"> You are importent for us and we are happy, you are here.</h3>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default HappyCustomer