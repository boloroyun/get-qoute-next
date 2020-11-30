import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
  render(){
    return (
      <React.Fragment>
        <p className="customClass">I am the stwled P element</p>
        <p className="customClassFromFile">I am the stwled P element</p>

        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/cv">
          <a>cv</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <style jsx global>
          {`
            .customClass {
              color: red;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header
