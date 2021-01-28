import BaseApi from './baseAPI';



class BlogApi extends BaseApi {


  constructor(accessToken) {
    super(accessToken, '/blogs');
  }

}
export default BlogApi;
