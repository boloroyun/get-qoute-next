import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from '@/hoc/withAuth';
import { useRouter } from "next/router";
import { useGetProduct, useUpdateProduct } from "@/actions/products";
import ProductForm from '@/components/ProductForm';
import { Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';


const ProductEdit = ({ user }) => {
  const router = useRouter();
  const [updateProduct, { error }] = useUpdateProduct();
  const { data: initialData } = useGetProduct(router.query.id);

  const _updateProduct = async (data) => {
    //   try {
    //      await updatePortfolio(router.query.id, data);
    //     toast.success('Portfolio has been updated!', { autoClose: 2000 })
    //   } catch {
    //    toast.error('Oops some error!', { autoClose: 2000 })
    //    }



    // updatePortfolio(router.query.id, data)
    // .then(() => toast.success('Portfolio has been updated!', { autoClose: 2000 }))
    //   .catch(() => toast.error('Oops some error!', { autoClose: 2000 }))
    await updateProduct(router.query.id, data);
    toast.success('Product has been updated!', { autoClose: 2000 })

  }



  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Product Edit">
        <Row>
          <Col md="8">
            {initialData &&
              <ProductForm
                onSubmit={_updateProduct}
                initialData={initialData} />

            }
            {error &&
              <div className="alert alert-danger mt-2">
                {error}
              </div>
            }
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};


export default withAuth(ProductEdit)('admin');
