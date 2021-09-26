const states = [
  {
    id: 1,
    name: 'West Bengal'
  },
  {
    id: 2,
    name: 'Tamil Nadu'
  },
  {
    id: 3,
    name: 'Karnataka'
  },
  {
    id: 4,
    name: 'Gujrat'
  },
  {
    id: 5,
    name: 'Punjab'
  },
  {
    id: 6,
    name: 'Sikkim'
  },
  {
    id: 7,
    name: 'Maharashtra'
  }
];

const getStates = (_, res, ctx) => res(ctx.delay(5000), ctx.json(states));

export default {
  getStates
};
