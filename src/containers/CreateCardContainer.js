import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';

const defaultData = {
  title: '',
  description: '',
  assignedTo: '',
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCard(listId, cardData) {
      const cardId = Date.now().toString();

      const card = {
        id: cardId,
        ...defaultData,
        ...cardData,
      };

      dispatch({
        type: 'CREATE_CARD',
        payload: { card, listId, cardId },
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateCard);
