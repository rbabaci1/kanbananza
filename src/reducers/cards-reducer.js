import { cards as defaultCards } from '../normalized-state';

const cardsReducer = (cards = defaultCards, action) => {
  // console.log(cards, action);

  if (action.type === 'CREATE_CARD') {
    const { card, cardId } = action.payload;

    return {
      entities: { ...cards.entities, [cardId]: card },
      ids: [...cards.ids, cardId],
    };
  }
  return cards;
};

export default cardsReducer;
