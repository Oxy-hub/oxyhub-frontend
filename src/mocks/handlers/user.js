// const getUser = (_, res, ctx) =>
//   res(
//     ctx.delay(5000),
//     ctx.json({
//       firstName: 'John',
//       middleName: 'Pastor',
//       lastName: 'Doe',
//       email: 'johndoe@oxyhub.com',
//       id: '1'
//     })
//   );

// const postUser = (req, res, ctx) => res(ctx.delay(2000), ctx.status(400));

// const postUser = (req, res, ctx) => {
//   console.log(req.body);
//   return res(
//     ctx.delay(),
//     ctx.status(200),
//     ctx.cookie('RTK', 'superSecretRefreshToken'),
//     ctx.json({
//       accessToken: 'superSecretAccessToken'
//     })
//   );
// };

// export default {
//   getUser,
//   postUser
// };
