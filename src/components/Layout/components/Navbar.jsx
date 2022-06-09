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
              <Avatar size="sm" />
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
