import { createStore } from 'redux';

interface Payload {
  userId: string;
  loading: boolean;
}

const reducer = (
  state: Payload = { userId: '', loading: false },
  action: { type: string; payload: Payload },
) => {
  switch (action.type) {
    case 'changeId':
      return { ...state, userId: action.payload.userId };
    case 'changeLoading':
      return { ...state, loading: action.payload.loading };

    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
