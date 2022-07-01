import React, { useEffect, useState } from 'react';
import { Descriptions, Empty, Spin } from '@arco-design/web-react';
import userIdStore from '../store/userIdStore';

const Details: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    const subscription = userIdStore.subscribe(() => {
      const state = userIdStore.getState();
      // console.log('store', state);
      setUserId(state.userId);
      setLoading(state.loading);
    });
    return () => {
      subscription();
    };
  }, []);
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
