import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const NavLinkSt = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active span::before {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #1976d2;
    margin-right: 5px;
    border-radius: 50%;
  }
  &.active p::before {
    content: '';
    width: 5px;
    height: 5px;
    background-color: white;
    margin-right: 5px;
    border-radius: 50%;
  }
`;

export const LinkSt = styled(Link)`
  text-decoration: none;
  color: white;
`;