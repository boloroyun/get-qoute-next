import ProductApi from '@/lib/api/products';
import auth0 from '@/utils/auth0';



export default async function handleProduct(req, res) {
  if (req.method === "GET") {
    const json = await new ProductApi().getById(req.query.id);
    return res.json(json.data);

  }

  if (req.method === "PATCH") {
    try {
      const { accessToken } = await auth0.getSession(req);
      const json = await new ProductApi(accessToken).update(req.query.id, req.body);
      return res.json(json.data);

    } catch (e) {
      return res.status(e.status || 422).json(e.response.data);

    }
  }
  if (req.method === 'DELETE') {
    const { accessToken } = await auth0.getSession(req);
    const json = await new ProductApi(accessToken).delete(req.query.id);
    return res.json(json.data);

  }
}


