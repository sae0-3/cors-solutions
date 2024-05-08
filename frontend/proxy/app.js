import http from 'node:http'

const PORT = 4000
const BACKEND_URL = 'http://backend:3000'

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4321')
  res.setHeader('Access-Control-Request-Method', 'GET')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    res.end()
    return
  }

  try {
    const response = await fetch(BACKEND_URL)
    const responseData = await response.json()

    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value)
    }

    res.writeHead(response.status)
    res.end(JSON.stringify(responseData))
  } catch (error) {
    console.error('Error:', error)
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Ocurrió un error al realizar la solicitud' }))
  }
})

server.listen(PORT, () => {
  console.log(`Servidor de proxy en ejecución en http://localhost:${PORT}`)
})
