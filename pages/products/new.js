import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Row, Col } from 'reactstrap';
import ProductForm from '@/components/ProductForm';
import { useCreateProduct } from '@/actions/products';
import Redirect from '@/components/shared/Redirect';

const ProductNew = ({ user, loading: userLoading }) => {
  const [createProduct, { data, loading, error }] = useCreateProduct();

  if (data) {
    return <Redirect to="/products" />
  }


  const _createProduct = (data) => {
    createProduct(data);
  }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header="Create Product">
        <Row>
          <Col md="8">
            <ProductForm onSubmit={_createProduct} />
             {error && <div className="alert alert-danger mt-2">{error}</div>}  
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
}

export default withAuth(ProductNew)('admin');
