/* eslint-disable no-console */
import glob from 'glob'

require('./globals')

glob('**/*_test.js', { cwd: __dirname }, (err, files) => {
  if (err) {
    console.log('Error finding test files.', err)
  }
  if (files.length === 0) {
    console.log('No test files found.')
  }

  files
    .map(file => `./${file}`)
    .forEach(file => require(file))
})
