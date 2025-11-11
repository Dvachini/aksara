import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(compression());
app.use(helmet());

app.use(express.static(path.join(process.cwd(), 'dist')));

app.use('/', (req, res, next) => {
  if (req.method !== 'GET') return next();
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

try {
  app.listen(PORT, () => {
    console.log(
      `[app] epanggil is running on port ${PORT} | Deploy mode: ${
        process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
      }`
    );
  });
} catch (error) {
  logger.error(`[app] Error: ${error.message}`);
  process.exit(1);
}
