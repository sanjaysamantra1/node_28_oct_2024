const express = require('express')
const { formidable } = require('formidable')

const app = express()

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(`
      <h2>With Node.js <code>"http"</code> module</h2>
      <form action="/api/upload" enctype="multipart/form-data" method="post">

        <div>Name: <input type="text" name="name" /></div>
        <div>Email: <input type="text" name="email" /></div>
        <div>Phone: <input type="text" name="phone" /></div>

        <div>File: <input type="file" name="myFiles" multiple="multiple" /></div>

        <input type="submit" value="Upload" />
      </form>
    `)
})

app.post('/api/upload', async (req, res) => {
  const form = formidable({})
  let fields
  let files
  try {
    [fields, files] = await form.parse(req)
    res.json({ fields, files })
  } catch (err) {
    res.end(String(err))
  }
})
app.listen(5000, () => {
  console.log('Server Running at 5000 port')
})
