import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export default function IndexPage() {

  return (
    <Layout>
      <h1>Hello Panos</h1>
      <Link to='/about'>About us</Link>
    </Layout>
  );
}
