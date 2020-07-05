export const getPoetry = function (url) {
  return fetch(url).then(response => response.json())
  .then(data => {

    return [data.origin, data.author, data.content]
  })
}