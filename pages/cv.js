import BaseLayout from "pages/products/[id]/node_modules/@/components/layouts/BaseLayout";
import BasePage from "pages/products/[id]/node_modules/@/components/BasePage";
import { useGetUser } from "pages/products/[id]/node_modules/@/actions/user";
import { Row, Col } from 'reactstrap';

const CV = () => {
      const { data, loading } = useGetUser();

    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
<Row>
  <Col md={{size: 8, offset: 2}}>
    <iframe style={{width: '100%', height: '800px'}} src="/banner.jpg" />
  </Col>
  </Row>     
   </BasePage>
      </BaseLayout>
    ); 
  }

export default CV;
