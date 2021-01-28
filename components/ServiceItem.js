import Link from 'next/link';
import moment from 'moment';

const ServiceItem = ({ service }) =>
  <div>
    <div className="post-preview clickable">
      <Link href="/services/[slug]" as={`/services/${service.slug}`}>
        <a>
          <h2 className="post-title">
            {service.title}
          </h2>
          <h3 className="post-subtitle">
            {service.subTitle}
          </h3>
        </a>
      </Link>
      <p className="post-meta">Posted by
              <a href="#"> {service.author.name} </a>
              - {moment(service.createdAt).format('LLLL')}
      </p>
    </div>
  </div>

export default ServiceItem;
