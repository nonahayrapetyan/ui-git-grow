import { SButton } from './Button.styles';
import { TButtonProps } from './Button.types';

export const Button = ({ ...props }: TButtonProps) => {
  return <SButton {...props} />;
};
