import BaseLayout from "pages/products/[id]/node_modules/@/components/layouts/BaseLayout";
import BasePage from 'pages/products/[id]/node_modules/@/components/BasePage'
import withAuth from 'pages/products/[id]/node_modules/@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { useCreateBlog } from 'actions/blogs';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const BlogEditor = ({ user, loading }) => {
  const router = useRouter();
const [createBlog, {data: createdBlog, error, loading: blogLoading}] = useCreateBlog();

const saveBlog = async data => {
const createdBlog = await createBlog(data)
router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlog._id}`)
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
onSave={saveBlog}
loading={true}
/>

      </BasePage>
    </BaseLayout>
  );
}

export default withAuth(BlogEditor)('admin');
