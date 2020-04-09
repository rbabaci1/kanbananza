import { lists as defaultLists } from '../normalized-state';

const listsReducer = (lists = defaultLists, action) => {
  // console.log(lists, action);
  if (action.type === 'CREATE_CARD') {
    const { listId, cardId } = action.payload;
    const entities = { ...lists.entities };

    entities[listId] = {
      ...entities[listId],
      cards: [...entities[listId].cards, cardId],
    };

    return {
      ...lists,
      entities,
    };
  }
  return lists;
};

export default listsReducer;
