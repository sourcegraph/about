import webpackPreprocessor from '@cypress/webpack-preprocessor'

module.exports = on => {
  on(
    'file:preprocessor',
    webpackPreprocessor({
      webpackOptions: {
        module: {
          rules: [
            {
              test: /\.test\.ts$/,
              use: 'ts-loader',
            },
          ],
        },
      },
    })
  )
}
