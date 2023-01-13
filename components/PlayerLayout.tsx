import { Box } from '@chakra-ui/layout';
import { css } from '@emotion/react';
import Player from '~Components/Player';
import SideBar from '~Components/Sidebar';

const navBarSize = '250px';
const playerSize = '100px';

const styles = {
  container: css({
    width: '100vw',
    height: '100vh',
  }),
  leftNav: css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: navBarSize,
    height: `calc(100% - ${playerSize})`,
  }),
  player: css({
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: playerSize,
    width: '100%',
  }),
  content: css({
    marginLeft: navBarSize,
    height: `calc(100% - ${playerSize})`,
  }),
};

function PlayerLayout({ children }): JSX.Element {
  return (
    <Box css={styles.container}>
      <Box css={styles.leftNav}>
        <SideBar />
      </Box>
      <Box css={styles.content}>
        {children}
      </Box>
      <Box css={styles.player}>
        <Player />
      </Box>
    </Box>
  );
}

export default PlayerLayout;
