import React, { useEffect } from 'react';
import { Input } from '@arco-design/web-react';
import { fromEvent, switchMap, debounceTime, Subscription, tap } from 'rxjs';
import userIdStore from '../store/userIdStore';
import fakeFetch from '@/utils/fakeFetch';

const InputSearch = Input.Search;
const InputComponent: React.FC = () => {
  useEffect(() => {
    const searchInput = document.querySelector(
      '#searchInput',
    ) as HTMLInputElement;
    let subscribe: Subscription | null = null;
    if (searchInput) {
      subscribe = fromEvent(searchInput, 'input')
        .pipe(
          debounceTime(200),
          tap(() => {
            userIdStore.dispatch({
              type: 'changeLoading',
              payload: { userId: '', loading: true },
            });
          }),
          switchMap(() => fakeFetch(searchInput.value)),
        )
        .subscribe(value => {
          userIdStore.dispatch({
            type: 'changeId',
            payload: { userId: value, loading: false },
          });
          userIdStore.dispatch({
            type: 'changeLoading',
            payload: { userId: '', loading: false },
          });
        });
    }
    return () => {
      if (subscribe) {
        subscribe.unsubscribe();
      }
    };
  }, []);
  return (
    <InputSearch
      id="searchInput"
      style={{ width: 350 }}
      allowClear
      placeholder="Please Enter something"
    />
  );
};
export default InputComponent;
