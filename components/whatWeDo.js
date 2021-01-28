import Link from 'next/link';
import {Button} from 'reactstrap';
const WhatWeDo = () => {



  return (
    <div>
      <Link href='/products'>
          <Button color="success" size="lg" block>Countertops</Button>
      </Link>
      <Link href='/services'>
          <Button color="success" size="lg" block>Service and maintenance</Button>
      </Link>
        <Link href='/#'>
          <Button color="success" size="lg" block>Cabinets</Button>
        </Link>
        <Link href='/#'>
          <Button color="success" size="lg" block>Flooring</Button>
        </Link>
        <Link href='/#'>
          <Button color="success" size="lg" block>Tile Installation</Button>
        </Link>

    </div>

  )
}

export default WhatWeDo;
