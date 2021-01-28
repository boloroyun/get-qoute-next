import { useState } from 'react';
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Row, Col, Button } from 'reactstrap';
import { useRouter } from 'next/router';
import { useGetUser } from '@/actions/user';
import { useDeleteProduct } from '@/actions/products';
import ProductApi from '@/lib/api/products';
import ProductCard from "@/components/ProductCard";
import { isAuthorized } from '@/utils/auth0';


const Products = ({ products: initialProducts }) => {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [deleteProduct, { data, error }] = useDeleteProduct();
  const { data: dataU, loading: loadingU } = useGetUser();

  const _deleteProduct = async (e, productId) => {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this product?');
    if (isConfirm) {
      await deleteProduct(productId);

      setProducts(products.filter(p => p._id !== productId));
    }
  }

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
      title="Stones-Marbles-Granities-Quartz"
      metaDescription="Best for kitchen and bathroom countertop materials are granities, quartzes and marbles"
        header='Products'
        className='portfolio-page'>
        <Row>
          {products.map(product =>
            <Col
              key={product._id}
              onClick={() => {
                router.push('/products/[id]', `/products/${product._id}`)

              }}
              md="4">
              <ProductCard
                product={product}>
                {dataU && isAuthorized(dataU, 'admin') &&
                  <>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push('/products/[id]/edit', `/products/${product._id}/edit`)
                      }}
                      className="mr-2" color="warning">Edit</Button>
                    <Button
                      onClick={(e) => _deleteProduct(e, product._id)}
                      color="danger">Delete</Button>
                  </>
                }
              </ProductCard>
            </Col>
          )}
        </Row>

      </BasePage>
    </BaseLayout>
  );
};


export async function getStaticProps() {
  const json = await new ProductApi().getAll();
  const products = json.data;

  return {
    props: { products },
    revalidate: 1
  }
}

export default Products;
