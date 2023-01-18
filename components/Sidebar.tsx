import NextImage from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md';

// 3574A9

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
];

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites',
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

function SideBar(): JSX.Element {
  return (
    <Box bg="black" width="100%" height="100%" paddingX="5px" color="gray">
      <Box paddingY="15px" height="100%" display="flex" flexFlow="column">
        <Box flex="0 1 auto" paddingX="20px" marginBottom="20px" width="120px">
          <NextImage alt="Logo" src="/logo.svg" width={150} height={75} />
        </Box>
        <Box flex="0 1 auto">
          <List spacing={2}>
            {navMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <LinkOverlay as={NextLink} href={item.route} passHref>
                    <ListIcon as={item.icon} color="white" marginRight="20px" />
                    {item.name}
                  </LinkOverlay>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Center>
          <Divider bg="gray.800" marginY="15px" width="70%" />
        </Center>
        <Box flex="0 1 auto">
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <LinkOverlay as={NextLink} href={item.route} passHref>
                    <ListIcon as={item.icon} color="white" marginRight="20px" />
                    {item.name}
                  </LinkOverlay>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Center>
          <Divider bg="gray.800" marginY="15px" width="70%" />
        </Center>
        <Box flex="1 1 auto" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item}>
                <LinkBox>
                  <LinkOverlay as={NextLink} href="/" passHref>
                    {item}
                  </LinkOverlay>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
