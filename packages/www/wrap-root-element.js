const React = require('react')
const { ThemeProvider } = require('theme-ui')
const { dark } = require('@theme-ui/presets')

const tokens = {
  ...dark,
  sizes: { container: 1024 }
}

module.exports = ({ element }) => (
  <ThemeProvider theme={tokens}>{element}</ThemeProvider>
)