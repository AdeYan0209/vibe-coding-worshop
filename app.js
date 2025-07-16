const express = require('express');
const app = express();
const port = 3000;

const helloRouter = require('./routes/hello');
const books = require('./routes/books');

app.use('/', helloRouter);
app.use('/books', books);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 