const fakeFetch = (value: string) =>
  new Promise<string>(resolve =>
    setTimeout(() => resolve(value), Math.random() * (8000 - 2000) + 2000),
  );
export default fakeFetch;
