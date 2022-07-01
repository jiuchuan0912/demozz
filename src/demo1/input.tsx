import React from 'react';
import { Input } from '@arco-design/web-react';

export interface InputComponentProps {
  onInputChange: (content: string) => void;
}
const InputSearch = Input.Search;
const InputComponent: React.FC<InputComponentProps> = ({ onInputChange }) => {
  return (
    <InputSearch
      style={{ width: 350 }}
      allowClear
      placeholder="Please Enter something"
      onChange={value => onInputChange(value)}
    />
  );
};
export default InputComponent;
