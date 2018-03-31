import express from 'express';
import http from 'http';
import path from 'path';
import logger from 'morgan';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5500;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
