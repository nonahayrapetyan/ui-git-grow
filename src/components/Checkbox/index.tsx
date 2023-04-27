import { SCheckbox } from './Checkbox.styles';
import { TCheckboxProps } from './Checkbox.types';

export const Checkbox = ({ ...props }: TCheckboxProps) => {
  return <SCheckbox {...props} />;
};
