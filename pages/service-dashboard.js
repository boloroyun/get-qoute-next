import BaseLayout from "pages/products/[slug]/node_modules/@/components/layouts/BaseLayout";
import BasePage from 'pages/products/[slug]/node_modules/@/components/BasePage'
import withAuth from 'hoc/withAuth';
import { Row, Col, Button } from 'reactstrap';
import Link from 'next/link'
import Masthead from '@/components/shared/Masthead';
import PortDropDown from 'components/shared/Dropdown';
import { useGetUserService, useUpdateService } from 'actions/services';
import { toast } from 'react-toastify';



const ServiceDashboard = ({ user, loading }) => {
  const [updateService] = useUpdateService();
  const { data: services, mutate } = useGetUserService();

  const changeServiceStatus = async (serviceId, status) => {
    await updateService(serviceId, { status })
      .then(() => mutate())
      .catch(() => toast.error('Something went wrong...'));
  }


  const createOption = (serviceStatus) => {
    return serviceStatus === 'draft' ? { view: 'Publish Story', value: 'published' }
      : { view: 'Make a draft', value: 'draft' }
  }

  const createOptions = (service) => {
    const option = createOption(service.status)

    return [
      {
        key: `${service._id}-published`,
        text: option.view,
        handlers: {
          onClick: () => changeServiceStatus(service._id, option.value)
        }
      },
      {
        key: `${service._id}-delete`,
        text: 'Delete',
        handlers: {
          onClick: () => changeServiceStatus(service._id, 'deleted')
        }
      }
    ]
  }


  const renderServices = (services, status) => (
    <ul className="user-blogs-list">
      {services && services.filter(service => service.status === status).map(service =>
        <li key={service._id}>
          <Link href="/services/editor/[id]" as={`/services/editor/${service._id}`}>
            <a>{service.title}</a>
          </Link>
          <PortDropDown items={createOptions(service)} />
        </li>
      )}
    </ul>
  )




  return (
    <BaseLayout navClass="transparent" user={user} loading={loading}>
      <Masthead imagePath="/images/background.jpg">
        <h1>Services Dashboard</h1>
        <span className="subheading">
          Let's write some nice service today{' '}
          <Link href='/services/editor'>
            <Button color="primary">Create a new Service</Button>
          </Link></span>
      </Masthead>
      <BasePage className="blog-user-page">
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Services </h2>
            {renderServices(services, 'published')}
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Services </h2>
            {renderServices(services, 'draft')}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
}


export default withAuth(ServiceDashboard)('admin');
