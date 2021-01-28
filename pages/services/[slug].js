
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { Row, Col } from 'reactstrap';
import { useGetUser } from '@/actions/user';
import { SlateView } from 'slate-simple-editor';
import Avatar from 'components/shared/Avatar';

import ServiceApi from 'lib/api/services';

const ServiceDetail = ({ service, author }) => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title={`${service.title} - Countertop`}
        metaDescription={service.content}
        className="slate-container">
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Avatar
              title={author.name}
              image={author.picture}
              date={service.createdAt}
            />
            <hr />
            <SlateView initialContent={service.content  } />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const { data } = await new ServiceApi().getAll();
  const paths = data.map(({ service }) => ({ params: { slug: service.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data: { service, author } } = await new ServiceApi().getBySlug(params.slug);
  return { props: { service, author }, revalidate: 1 }
}



export default ServiceDetail;
