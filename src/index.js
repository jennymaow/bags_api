const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connect = require('../src/utils/connect');
dotenv.config();

const BagRoutes = require('./api/routes/bags.routes');
const BrandRoutes = require('./api/routes/brand.routes');

const server = express();
connect();

const PORT = process.env.PORT;

server.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

server.use(express.json({ limit: '5mb' }));
server.use(express.urlencoded({ limit: '5mb', extended: false }));

server.use('/api/v1/bags', BagRoutes);
server.use('/api/v1/brands', BrandRoutes);

server.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  return next(error);
});

server.use((error, req, res) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.disable('x-powered-by');

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
