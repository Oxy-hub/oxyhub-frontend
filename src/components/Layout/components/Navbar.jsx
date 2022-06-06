import { nanoid } from 'nanoid';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Link,
  Flex,
  Menu,
  Avatar,
  HStack,
  Spacer,
  MenuList,
  MenuItem,
  Container,
  MenuButton,
  MenuDivider
} from '@chakra-ui/react';

import navLinks from '../utils/navLinks';

const Navbar = () => (
  <Box py={3.5} bg="neutral.0" boxShadow="base">
    <Container maxW="container.lg">
      <Flex align="center">
        {/* Logo */}
        {/* Needs to replaced later */}
        <Link as={ReactLink} to="/" _hover={{}}>
          <Box textStyle="beta" as="h2">
            Oxyhub
          </Box>
        </Link>

        <Spacer />

        {/* Links & Other Menu */}
        <HStack spacing={10}>
          {navLinks.nav.map(link => (
            <Link as={ReactLink} to={`${link.path}`} key={nanoid()}>
              {link.title}
            </Link>
          ))}

          <Menu isLazy gutter={14} placement="top-end" autoSelect={false}>
            {/* Avatar src needs to be updated */}
            <MenuButton>
              <Avatar
                size="sm"
                src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              />
            </MenuButton>

            <MenuList>
              {navLinks.menu.map(link => (
                <Link as={ReactLink} to={`${link.path}`} key={nanoid()}>
                  <MenuItem icon={<link.icon size="1.2em" />}>
                    {link.title}
                  </MenuItem>
                </Link>
              ))}

              <MenuDivider />

              <Link as={ReactLink} to="?action=logout">
                <MenuItem icon={<AiOutlineLogout size="1.2em" />}>
                  Sign Out
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

export default Navbar;
