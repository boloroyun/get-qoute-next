
import axios from 'axios';
import { useApiHandler, fetcher } from 'actions'
import useSWR from "swr";



//const CATEGORY_DATA = [
//  { id: 'c-0', name: 'all' },
//  { id: 'c-1', name: 'Granite' },
//  { id: 'c-2', name: 'Marble' },
//  { id: 'c-3', name: 'Quartz' },
//  { id: 'c-4', name: 'Other' },
//]

// 1. getCategories function
// 2. get categories in index page
// 3. provide categories to sidemenu
// 4. in sidemenu iterate categories and display them

const createProduct = (data) => axios.post('/api/v1/products', data);
const updateProduct = (id, data) => axios.patch(`/api/v1/products/${id}`, data);
const deleteProduct = (id) => axios.delete(`/api/v1/products/${id}`);


export const useCreateProduct = () => useApiHandler(createProduct)
export const useUpdateProduct = () => useApiHandler(updateProduct)
export const useDeleteProduct = () => useApiHandler(deleteProduct)



export const useGetProduct = (id) => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/products/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest };
}



//export const getCategories = () => {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      resolve(CATEGORY_DATA)
//      // reject('Cannot fetch data!')
//    }, 50)
//  })
//}


//export const getPosts = () => {
//  return axios.get(`${BASE_URL}/api/v1/posts`).then(res => res.data)
//}
