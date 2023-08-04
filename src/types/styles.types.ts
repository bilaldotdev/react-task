export interface CardStyleProps {
  $disableElevation?: boolean;
}

export interface StackStyleProps {
  $direction?: 'row' | 'column';
  $gap?: string;
  $padding?: string;
  $margin?: string;
  $justify?: 'space-between' | 'flex-start' | 'flex-end' | 'center' | 'space-around';
  $align?: 'space-between' | 'flex-start' | 'flex-end' | 'center' | 'space-around';
}

export interface InputFieldStyleProps {
  $padding?: string;
  $margin?: string;
  $width?: string;
  $fullWidth?: boolean;
}
