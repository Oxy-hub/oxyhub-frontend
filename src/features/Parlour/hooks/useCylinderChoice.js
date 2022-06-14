import { useState } from 'react';

const useCylinderChoice = () => {
  const [choice, setChoice] = useState({
    type: null,
    sku: null
  });

  return { choice, setChoice };
};

export default useCylinderChoice;
