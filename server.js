import { createServer } from 'node:https'
import { readFileSync } from 'node:fs'

const { DOMAIN = 'example.com', PORT = 10888 } = process.env

const options = {
  key: readFileSync(`./certbot/config/live/${DOMAIN}/privkey.pem`),
  cert: readFileSync(`./certbot/config/live/${DOMAIN}/fullchain.pem`),
}

createServer(options, (req, res) => {
  let data = []

  req.on('data', (chunk) => data.push(chunk))

  res.end(() => {
    const { sentStamp, receivedStamp, ...parsed } = JSON.parse(data)
    const custom = {
      sent: new Date(sentStamp).toLocaleString(),
      received: new Date(receivedStamp).toLocaleString(),
      ...parsed,
    }
    console.table(custom)
    return JSON.stringify(custom)
  })
}).listen(PORT, DOMAIN)

console.log(`Waiting for connections on https://${DOMAIN}:${PORT}`)
