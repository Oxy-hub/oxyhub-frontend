const loginWithGithub = (_, res, ctx) =>
  res(
    ctx.delay(),
    ctx.cookie('RTK', 'superSecretRefreshToken'),
    ctx.json({
      accessToken: 'superSecretAccessToken',
      isAuthenticated: false,
      isInitial: true
    })
  );

export default {
  loginWithGithub
};
