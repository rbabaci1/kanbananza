const createCardAction = (data) => {
  return {
    type: 'CREATE_CARD',
    payload: { data },
  };
};

export default createCardAction;
