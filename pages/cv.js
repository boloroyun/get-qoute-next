import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";


const CV = () => {
      const { data, loading } = useGetUser();

    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>Hello CV</h1>
        </BasePage>
      </BaseLayout>
    ); 
  }

export default CV;
