// Package Imports
const app = require('express')

// Server Setup
const server = app()
const PORT = 2007
const HOSTNAME ='0.0.0.0'
server.listen(PORT, HOSTNAME, () => {
     console.log (`Server is running in ${HOSTNAME}:${PORT}`)
    })
   

    