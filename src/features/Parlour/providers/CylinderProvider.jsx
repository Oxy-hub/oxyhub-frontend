import { createContext, useReducer } from 'react';

export const CylinderContext = createContext();

const initalState = {
  sku: null,
  type: null,
  productId: null,
  isModalOpen: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SKU':
      return { ...state, sku: action.payload };

    case 'SET_TYPE':
      return { ...state, type: action.payload };

    case 'SET_PRODUCT_ID':
      return { ...state, productId: action.payload };

    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true };

    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false };

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const CylinderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const value = {
    choice: state,
    openModal: () => {
      dispatch({ type: 'OPEN_MODAL' });
    },
    closeModal: () => {
      dispatch({ type: 'CLOSE_MODAL' });
    },
    setType: item => {
      dispatch({ type: 'SET_TYPE', payload: item });
    },
    setProductId: productId => {
      dispatch({ type: 'SET_PRODUCT_ID', payload: productId });
    },
    setSku: sku => {
      dispatch({ type: 'SET_SKU', payload: sku });
    }
  };

  return (
    <CylinderContext.Provider value={value}>
      {children}
    </CylinderContext.Provider>
  );
};

export default CylinderProvider;
