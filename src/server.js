import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

const Home = (req, res) => {
  console.log('I will respond.');
  return res.send('I love JS');
};

const login = (req, res) => {
  return res.send('login');
};

app.use(logger);
app.get('/', Home);
app.get('/login', login);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
