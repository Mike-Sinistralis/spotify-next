import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';

const styles = {
  title: css({
    color: 'red',
  }),
};

function IndexPage(): JSX.Element {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 css={styles.title}>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
}

export default IndexPage;
