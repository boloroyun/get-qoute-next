import auth0 from 'utils/auth0';
import ServiceApi from 'lib/api/services';


export default async function getUserServices(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const json = await new ServiceApi(accessToken).getByUser();
    return res.json(json.data);
  } catch (e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}
