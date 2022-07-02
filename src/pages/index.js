import * as React from 'react';
import Layout from '../components/layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {

  const data = useStaticQuery(graphql`
  query GetBlogPosts {
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      id
      slug
      frontmatter {
        title
        date(fromNow: true)
        description
        author
      }
    }
  }
}
`);

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <h1>Hello Panos</h1>
      <Link to='/about'>About us</Link>

      <h2>Check out my recent blog posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
            <small>By: {post.frontmatter.author}</small>{' '}
            <small>{post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
