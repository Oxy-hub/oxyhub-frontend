// const loginWithGithub = (_, res, ctx) => res(ctx.delay(1000), ctx.status(500));

const loginWithGithub = (_, res, ctx) =>
  res(
    ctx.delay(2000),
    ctx.json({
      accessToken: 'onlyUserRegisterAccessToken',
      isInitial: true,
      firstName: 'Sabyasachi',
      middleName: '',
      lastName: 'Karmakar',
      email: 'sabyasachi.tffs@gmail.com'
    })
  );

// const loginWithGithub = (_, res, ctx) =>
//   res(
//     ctx.delay(),
//     ctx.cookie('RTK', 'superSecretRefreshToken'),
//     ctx.json({
//       accessToken: 'superSecretAccessToken',
//       isInitial: false
//     })
//   );

export default {
  loginWithGithub
};
