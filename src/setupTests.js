import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  // Run clenup after every test
  cleanup();
});
