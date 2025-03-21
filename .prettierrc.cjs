module.exports = {
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
}
