
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';
import { useGetService, useUpdateService } from 'actions/services';
import { useRouter } from 'next/router';

const ServiceUpdateEditor = ({ user, loading }) => {
  const router = useRouter();
  const { data } = useGetService(router.query.id);
  const [updateService, { error, loading: isServiceSaving }] = useUpdateService();

  const _updateService = async data => {
    await updateService(router.query.id, data);
    toast.success('Service updated!')
  }
  if (error) {
    toast.error(error)
  }

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        {data && data.content &&
          <Editor
            header="Update Your Service..."
            initialContent={data.content}
            onSave={_updateService}
            loading={isServiceSaving}
          />
        }
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(ServiceUpdateEditor)('admin')
