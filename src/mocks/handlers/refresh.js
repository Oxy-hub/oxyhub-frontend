// const refresh = (_, res, ctx) =>
//   res(
//     ctx.delay(),
//     ctx.cookie('RTK', 'superSecretRefreshToken'),
//     ctx.json({
//       accessToken: 'superSecretAccessToken',
//       isAuthenticated: false,
//       isInitial: true
//     })
//   );

const refresh = (_, res, ctx) =>
  res(
    ctx.status(401),
    ctx.json({
      status: 401,
      message: 'Unauthorized'
    })
  );

export default {
  refresh
};
