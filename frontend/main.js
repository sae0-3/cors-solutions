const root = document.getElementById('root')
const API = 'http://localhost:1234'

const fetchData = async () => {
  try {
    const response = await fetch(API)
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const divArticles = document.createElement('div')
divArticles.className = 'articles'

fetchData()
  .then(({ users }) => {
    users.map(({ name, profile }) => {
      const article = document.createElement('article')
      const h3 = document.createElement('h3')
      const img = document.createElement('img')

      h3.innerHTML = name.toUpperCase()
      img.src = profile

      article.append(img, h3)
      divArticles.appendChild(article)
    })
  }).catch( console.log )

root.appendChild(divArticles)
