const urlFn = require('url')
const pathFn = require('path')

function parser(urlString) {
  if (!/^(https?):\/\/.+$/.test(urlString)) {
    return null
  }

  const {
    protocol,
    host,
    path,
  } = urlFn.parse(urlString)
  const url = `${protocol}//${host}`
  const { name } = pathFn.parse(path)

  if (!name) {
    return { url }
  }

  return {
    url,
    root: `/${name}`,
  }
}

module.exports = parser
