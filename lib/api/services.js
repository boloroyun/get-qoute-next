import BaseApi from './baseAPI';



class ServiceApi extends BaseApi {


  constructor(accessToken) {
    super(accessToken, '/services');
  }

}
export default ServiceApi;
