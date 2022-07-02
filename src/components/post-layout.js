import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo';
import { header, content } from '../styles/layout.module.css';
import '../styles/global.css';
import Layout from './layout';

export default function PostLayout(
  {
    children,
    pageContext,
  }) {

  const { title, description } = pageContext.frontmatter;

  return (
    <Layout title={title} description={description}>
      {children}
      <Link to='/'>&larr; back</Link>
    </Layout>
  );

}
