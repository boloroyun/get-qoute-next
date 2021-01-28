
import axios from 'axios';
import { useApiHandler, fetcher } from 'actions'
import useSWR from "swr";



const createBlog = data => axios.post('/api/v1/blogs', data);
const updateBlog = (id, data) => axios.patch(`/api/v1/blogs/${id}`, data);
//  const deletePortfolio = (id) => axios.delete(`/api/v1/portfolios/${id}`);


export const useCreateBlog = () => useApiHandler(createBlog);
export const useUpdateBlog = () => useApiHandler(updateBlog)
//export const useDeleteBlog = () => useApiHandler(deleteBlog)



export const useGetBlog = id => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/blogs/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest };
}

export const useGetUserBlog = id => {
  const { data, error, ...rest } = useSWR(`/api/v1/blogs/me`, fetcher);
  return { data, error, loading: !data && !error, ...rest };
}
