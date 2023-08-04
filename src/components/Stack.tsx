import styled from 'styled-components';
import { StackStyleProps } from '../types/styles.types';

const Stack = styled.div<StackStyleProps>`
  display: flex;
  gap: ${props => props.$gap || '4px'};
  padding: ${props => props.$padding || '0px'};
  margin: ${props => props.$margin || '0px'};
  justify-content: ${props => props.$justify || 'unset'};
  align-items: ${props => props.$align || 'unset'};
  flex-direction: ${props => (props.$direction === 'column' ? 'column' : 'row')};
`;

export default Stack;
