import { Global, css } from '@emotion/react';

const styles = css({
  '::-webkit-scrollbar': {
    width: '4px',
    '-webkit-appearance': 'none',
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    background: 'rgba(255, 255, 255, .7)',
    '-webkit-box-shadow': '0 0 1px rgba(255, 255, 255, .7)',
  },
});

function GlobalStyle() {
  return (
    <Global
      styles={styles}
    />
  );
}

export default GlobalStyle;
