const getUser = (_, res, ctx) =>
  res(
    ctx.delay(5000),
    ctx.json({
      firstName: 'John',
      middleName: 'Pastor',
      lastName: 'Doe',
      email: 'johndoe@oxyhub.com',
      id: '1'
    })
  );

export default {
  getUser
};
