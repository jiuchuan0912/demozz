import React from 'react';
import { Descriptions, Empty, Spin } from '@arco-design/web-react';

export interface DetailsProps {
  userId: string;
  loading: boolean;
}

const Details: React.FC<DetailsProps> = ({ userId, loading }) => {
  const data = [
    {
      label: 'Name',
      value: `name ${userId}`,
    },
    {
      label: 'Mobile',
      value: `123-1234-1234__${userId}`,
    },
    {
      label: 'Residence',
      value: 'Beijing',
    },
    {
      label: 'Hometown',
      value: 'Beijing',
    },
    {
      label: 'Address',
      value: 'Yingdu Building, Zhichun Road, Beijing',
    },
  ];
  return (
    <Spin dot loading={loading}>
      {userId ? (
        <Descriptions
          colon=" :"
          layout="inline-horizontal"
          title="User Info"
          data={data}
        />
      ) : (
        <Empty />
      )}
    </Spin>
  );
};
export default Details;
