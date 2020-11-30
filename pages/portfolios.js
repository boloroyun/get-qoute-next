import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
//import Link from "next/link";
import { Link } from '../routes'

class Portfolio extends React.Component {

  static async getInitialProps() {
    let posts = [];
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      posts = res.data;
    } catch (e) {
      console.error(e);
    }
    return { posts: posts.slice(0, 10) };
  }


  renderPosts(posts) {
    return posts.map(post => 
      <li key={post.id} style={{ fontSize: "20px" }}>
        <Link route={`/portfolios/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    )
    }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1> Hello Portfolio </h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    )
  }
}

export default Portfolio;
