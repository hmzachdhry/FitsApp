const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const path = require('path');
const authController = require('./controllers/authController');
const PORT = 5432;

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '/index.html'));
// });

app.post('signup', authController.signUp)
app.post('login', authController.login)










// Global error handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));