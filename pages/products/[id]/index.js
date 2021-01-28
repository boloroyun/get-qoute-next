import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import ProductApi from '@/lib/api/products';
import Image from 'next/image'
import ViewSource from 'components/view-source';
import { bgWrap, bgText } from 'styles/components/styles.module.css';



const Product = ({ product }) => {
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent"
>
      <BasePage 
      noWrapper
      indexPage
      title={`${product.stoneName}-Countertop`}
      metaDescription={product.description}
      >

        <div className="portfolio-detail">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">

              <ViewSource pathname="pages /responsive.js" />
            <div className={bgWrap}>
              <Image
                alt={product.stoneName}
                src={product.image}
                layout="fill"
                objectFit="cover"
                quality={100}
                sizes="100vw"
              />
            </div>
              <p className="cover-heading">{product.stoneName}</p>
              <p className="lead dates">{product.stoneType}</p>
              <p className="lead info mb-0">{product.stoneBrand}</p>
              <p className="lead">{product.description}</p>
              <a href="" target="_" class="btn btn-lg btn-secondary">Get Quote on this {product.stoneType}</a>


          </main>
          </div>

</div>

      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  const json = await new ProductApi().getAll();
  const products = json.data;
  const paths = products.map(product => {
    return {
      params: { id: product._id }
    }
  })

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const json = await new ProductApi().getById(params.id);
  const product = json.data;
  return { props: { product }, revalidate: 1 };
}


//export async function getServerSideProps({ query }) {
//  const json = await new ProductApi().getById(query.id);
//  const product = json.data;
//
//  return { props: { product } };
//}




export default Product;
