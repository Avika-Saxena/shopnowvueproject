// proxy-server.js

import express from 'express'
import axios from 'axios'

const app = express()
const PORT = process.env.PORT || 5174

// Define a route to proxy requests
app.get('/api/products', async (req, res) => {
  try {
    // Forward the request to the external server
    const response = await axios.get('http://139.5.189.24:8090/api/products')

    // Modify response headers to include CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Return the response data
    res.json(response.data)
  } catch (error) {
    // Handle any errors
    console.error('Error proxying request:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`)
})
