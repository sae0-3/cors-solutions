import http from 'node:http'


const data = {
  users: [
    {
      id: 1,
      name: 'Carlos Flores',
      profile: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: 2,
      name: 'Sofia Perez',
      profile: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      name: 'Ricardo Castro',
      profile: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  ]
}


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(data))
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({ message: 'Recurso no encontrado' }))
  }
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))
