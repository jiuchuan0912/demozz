import React from 'react';
import { Divider } from '@arco-design/web-react';
import InputComponent from './input';
import Details from './details';

const Container: React.FC = () => {
  return (
    <div>
      <InputComponent />
      <Divider />
      <Details />
    </div>
  );
};
export default Container;
