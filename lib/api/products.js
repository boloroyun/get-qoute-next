import axios from 'axios';
import BaseApi from './baseAPI';


class ProductApi extends BaseApi {


  constructor(accessToken) {
    super(accessToken, '/products');
  }


  getAll() {
    return axios.get(this.apiUrl)
  }

  delete(id) {
    return axios.delete(`${this.apiUrl}/${id}`, this.config);

  }

}
export default ProductApi;
