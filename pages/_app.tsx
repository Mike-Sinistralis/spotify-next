import { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';

const styles = css({
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Global styles={styles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;