import { Card, CardHeader, CardBody, CardText, CardTitle, CardImg} from 'reactstrap';


const PortfolioCard = ({portfolio, children}) =>
    <Card className="portfolio-card">
    <CardImg top width="100%" src={portfolio.image} alt="Portfolio image" />
      <CardHeader className="portfolio-card-header">{portfolio.jobTitle}</CardHeader>
      <CardBody>
        <p className="portfolio-card-city">{portfolio.location}</p>
        <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
         <CardText className="portfolio-card-text">{portfolio.description}</CardText>
         {children}
      </CardBody>
    </Card>

export default PortfolioCard;
