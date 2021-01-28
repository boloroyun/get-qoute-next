import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { useCreateService } from 'actions/services';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const ServiceEditor = ({ user, loading }) => {
  const router = useRouter();
  
  const [createService, { data: createdService, error, loading: serviceLoading }] = useCreateService();

  const saveService = async data => {
    const createdService = await createService(data)
    router.push('/services/editor/[id]', `/services/editor/${createdService._id}`)
  }

  if (error) {
    toast.error(error);
  }

  return (
    <BaseLayout
      user={user}
      loading={loading}>
      <BasePage>
        <Editor
          onSave={saveService}
          loading={serviceLoading}
        />

      </BasePage>
    </BaseLayout>
  );
}

export default withAuth(ServiceEditor)('admin');
