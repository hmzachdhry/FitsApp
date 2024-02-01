const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const {login, signUp} = require('./controllers/authController');
const PORT = 8085;

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '/index.html'));
// });

app.post('/login', login)

// ---------- testing purposes ----------------
// app.post('/login', (req, res) => {
//   console.log('login post req');
// });
// app.post('/signup', (req, res) => {
//   console.log('signup post req');
// });
// ---------- testing purposes ----------------


// app.post('/secret', taskController.postTask, (req, res) => {
//   return res.status(201).json(res.locals.saved);
// });

app.use((req, res, next) => {
  console.log('404: Page Not Found')
  res.status(404).send('Page Not Found');
});
// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
