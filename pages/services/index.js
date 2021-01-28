import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from '@/components/BasePage'
import { useGetUser } from "@/actions/user";
import { Row, Col } from 'reactstrap';
import ServiceItem from 'components/ServiceItem';
import Masthead from "components/shared/Masthead";
import ServiceApi from 'lib/api/services';

const Services = ({ services }) => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout
      navClass="transparent" className="blog-listing-page"
      user={data} loading={loading}>
      <Masthead imagePath="/images/background.jpg">
        <h1>Service and Maintenance</h1>
        <span className="subheading">Programming, travelling...</span>
      </Masthead>
      <BasePage
        title="Countertop Service and Maintenance"
        metaDescription="We restore countertops like a new. Our services are sealing and cleaning countertops, repairing countertop chips, cracks and seams, drilling the sink holes and other holes, extending cooktop cutout and sink cutout."
        className="blog-body"
        >
          
        <Row>
          {
            services.map(service =>
              <Col key={service._id} md="10" lg="8" className="mx-auto">
                <ServiceItem service={service} />
                <hr></hr>
              </Col>
            )
          }
        </Row>
      </BasePage>
    </BaseLayout>);
}

export async function getStaticProps() {
  const { data } = await new ServiceApi().getAll();
  const services = data.map(item => ({ ...item.service, author: item.author }))
  return {
    props: { services },
    revalidate: 60


  }
}

export default Services;
