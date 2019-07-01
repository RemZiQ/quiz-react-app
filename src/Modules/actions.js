export const setInput = answer => (
  {
    type: 'INPUT',
    answer,
  }
);

export const nextPage = () => (
  {
    type: 'NEXT_QUEUE',
  }
);

export const prevPage = () => (
  {
    type: 'PREV_QUEUE',
  }
);

export const reload = () => (
  {
    type: 'RELOAD_APP',
  }
);
