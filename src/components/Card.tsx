import styled from 'styled-components';
import { CardStyleProps } from '../types/styles.types';

const Card = styled.div<CardStyleProps>`
  background-color: white;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
  ${props => !props.$disableElevation && 'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'};
`;

export default Card;
