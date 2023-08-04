import styled from 'styled-components';
import { InputFieldStyleProps } from '../types/styles.types';

const InputField = styled.input<InputFieldStyleProps>`
  padding: 6px;
  border: solid 1px gray;
  border-radius: 4px;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: blue;
  }

  width: ${props => props.$width || 'auto'};
  ${props => props.$fullWidth && 'width: 100%'};
`;

export default InputField;
