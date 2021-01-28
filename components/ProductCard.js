import { Card, CardHeader, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';


const ProductCard = ({ product, children }) =>
  <Card className="portfolio-card">
    <CardImg top width="100%" src={product.image} alt="Product image" />
    <CardHeader className="portfolio-card-header">{product.stoneName} {product.stoneCode}</CardHeader>
    <CardBody>
      <p className="portfolio-card-city">Origin: {product.origin}</p>
      <CardTitle className="portfolio-card-title">{product.stoneType}</CardTitle>
      <CardText className="portfolio-card-text">Stone Brand: {product.stoneBrand} <br></br> {product.description}</CardText>
      {children}
    </CardBody>
  </Card>

export default ProductCard;
