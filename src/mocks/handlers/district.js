const districts = {
  1: [
    {
      id: 1,
      name: 'Bankura'
    },
    {
      id: 2,
      name: 'Puruliya'
    }
  ],
  2: [
    {
      id: 1,
      name: 'Random1'
    },
    {
      id: 2,
      name: 'Random2'
    }
  ],
  3: [
    {
      id: 1,
      name: 'Random31'
    },
    {
      id: 2,
      name: 'Random32'
    }
  ],
  4: [
    {
      id: 1,
      name: 'Random31'
    },
    {
      id: 2,
      name: 'Random32'
    }
  ],
  5: [
    {
      id: 1,
      name: 'Random31'
    },
    {
      id: 2,
      name: 'Random32'
    }
  ],
  6: [
    {
      id: 1,
      name: 'Random31'
    },
    {
      id: 2,
      name: 'Random32'
    }
  ],
  7: [
    {
      id: 1,
      name: 'Random31'
    },
    {
      id: 2,
      name: 'Random32'
    }
  ]
};

const getDistricts = (req, res, ctx) => {
  console.log('State ID:', req.url.searchParams.get('id'));

  return res(
    ctx.delay(5000),
    ctx.json(districts[req.url.searchParams.get('id')])
  );
};

export default {
  getDistricts
};
