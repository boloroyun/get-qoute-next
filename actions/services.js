
import axios from 'axios';
import { useApiHandler, fetcher } from 'actions'
import useSWR from "swr";



const createService = data => axios.post('/api/v1/services', data);
const updateService = (id, data) => axios.patch(`/api/v1/services/${id}`, data);


export const useCreateService = () => useApiHandler(createService);
export const useUpdateService = () => useApiHandler(updateService)



export const useGetService = id => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/services/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest };
}

export const useGetUserService = id => {
  const { data, error, ...rest } = useSWR(`/api/v1/services/me`, fetcher);
  return { data, error, loading: !data && !error, ...rest };
}
