import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const AnchorTag = styled(NavLink)`
  text-decoration: none;
  color: #575656;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: blue;
  }
`;

export default AnchorTag;
