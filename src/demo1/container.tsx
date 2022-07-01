import React, { useEffect, useRef, useState } from 'react';
import { Divider } from '@arco-design/web-react';
import InputComponent from './input';
import Details from './details';
import fakeFetch from '@/utils/fakeFetch';

const Container: React.FC = () => {
  const [inputValue, setValue] = useState('');
  const [userId, setUserId] = useState('');
  const fetchQueue = useRef<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputValue) {
      fetchQueue.current.push(inputValue);

      (async () => {
        try {
          setLoading(Boolean(fetchQueue.current.length));
          const data = await fakeFetch(inputValue);
          fetchQueue.current.shift();
          setUserId(data);
        } finally {
          setLoading(Boolean(fetchQueue.current.length));
        }
      })();
    }
  }, [inputValue]);

  return (
    <div>
      <InputComponent onInputChange={setValue} />
      <Divider />
      <Details loading={loading} userId={userId} />
    </div>
  );
};
export default Container;
