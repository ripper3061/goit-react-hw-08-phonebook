import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2a363b;
`;

export const Link = styled(NavLink)`
  justify-content: space-between;
  width: 100px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #dedede;
  color: #2c2c2c;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  margin-right: 5px;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

  &.active {
    color: white;
    background-color: #02c0ff;
  }
`;
