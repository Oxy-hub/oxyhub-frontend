// const refresh = (_, res, ctx) =>
//   res(
//     ctx.delay(),
//     ctx.cookie('RTK', 'superSecretRefreshToken'),
//     ctx.json({
//       accessToken: 'superSecretAccessToken'
//     })
//   );

const refresh = (_, res, ctx) =>
  res(
    ctx.delay(2000),
    ctx.status(401),
    ctx.json({
      status: 401,
      message: 'Unauthorized'
    })
  );

export default {
  refresh
};
