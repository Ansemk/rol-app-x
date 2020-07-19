module.exports = {
  stories: ['../src/**/*.stories.js'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });

    config.module.rules.push({
      test: /\.(s*)css$/,
      use: ['to-string-loader', 'css-loader', 'sass-loader'],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
