module.exports = {
  roots: ['./resources/js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: "jsdom",
  testMatch: ['**/*.test.js?(x)'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif)$': 'identity-obj-proxy',
    '\\.(eot|otf|webp|svg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '\\.(mp4|webm)$': 'identity-obj-proxy',
    '\\.(wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}
