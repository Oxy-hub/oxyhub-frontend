import { createContext, useReducer } from 'react';

export const CylinderContext = createContext();

const initalState = {
  sku: null,
  type: null,
  variants: null,
  isModalOpen: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SKU':
      return { ...state, sku: action.payload };

    case 'SET_TYPE':
      return { ...state, type: action.payload };

    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true };

    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false };

    case 'SET_VARIANTS':
      return { ...state, variants: action.payload };

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
    setItem: type => {
      dispatch({ type: 'SET_TYPE', payload: type });
    },
    setVariants: variants => {
      dispatch({ type: 'SET_VARIANTS', payload: variants });
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
