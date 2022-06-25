const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

// Make build folder public
app.use(express.static('./demo/build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './demo/build', 'index.html'));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})