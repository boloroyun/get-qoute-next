import { Container, Row, Button } from 'reactstrap';
import Link from 'next/link'


const GetServiceButton = ({ imagePath }) =>
  <div className="getQuote" style={{ "backgroundImage": `url(${imagePath})` }}>
    <div className="overlay"></div>
    <Container>
      <Row>
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <span className="subheading">
              What kind of services do you need?{' '}
              <Link href='/services'>
                <Button color="primary">Get Quote</Button>
              </Link></span>
          </div>
        </div>
      </Row>
    </Container>
  </div>

export default GetServiceButton;
