import { createStore } from 'redux';

const initialState = {
  backgroundColor: '#ffffff', // Начальный цвет фона
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;