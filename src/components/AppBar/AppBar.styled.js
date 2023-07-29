import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const NavLinkSt = styled(NavLink)`
  text-decoration: none;
  color: white;
   &.active {
    text-decoration: underline;
  }
`;

export const LinkSt = styled(Link)`
  text-decoration: none;
  color: white;
`;