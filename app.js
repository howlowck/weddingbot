require('dotenv').config()
const restify = require('restify')
const builder = require('botbuilder')

// Create bot and add dialogs
const connector = new builder.ChatConnector({
  appId: process.env.APP_ID,
  appPassword: process.env.APP_PASSWORD
})

const bot = new builder.UniversalBot(connector)
bot.dialog('/', function (session) {
  session.send("Hi, Thank you for using Hao and Mia's Wedding Bot! Please check back after June 1st for more details.")
})

// Setup Restify Server
const server = restify.createServer()

server.post('/api/messages', connector.listen())
server.listen(process.env.port || 3978, function () {
  console.log('%s listening to %s', server.name, server.url)
})
