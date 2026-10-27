import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;
const DIST_PATH = path.join(process.cwd(), 'dist');
const INDEX_PATH = path.join(DIST_PATH, 'index.html');

app.use(compression());

// Security headers — tuned for securityheaders.com A+ rating.
// Helmet 7/8 enables Permissions-Policy (all features denied by default)
// and HSTS, which lifts the score from A to A+.
const csp = {
  directives: {
    defaultSrc: ["'self'"],
    baseUri: ["'self'"],
    fontSrc: ["'self'", 'https:', 'data:'],
    formAction: ["'self'"],
    frameAncestors: ["'self'"],
    imgSrc: ["'self'", 'data:', 'https:'],
    objectSrc: ["'none'"],
    scriptSrc: ["'self'"],
    scriptSrcAttr: ["'none'"],
    styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
    upgradeInsecureRequests: [],
  },
};

// Permissions-Policy: not provided by helmet 8 — set manually.
// Lock down all browser features/APIs this static SPA doesn't need.
app.use((req, res, next) => {
  res.setHeader(
    'Permissions-Policy',
    'accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), interest-cohort=()'
  );
  next();
});

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: csp.directives,
    },
    // CORP same-origin is the browser default; matches our static SPA (no cross-site embedding needs).
    crossOriginResourcePolicy: { policy: 'same-origin' },
    // 2 years, all subdomains, opt into the browser HSTS preload list.
    strictTransportSecurity: {
      maxAge: 63072000,
      includeSubDomains: true,
      preload: true,
    },
  })
);

if (!fs.existsSync(INDEX_PATH)) {
  console.warn(
    '[app] dist/index.html is missing. Run `bun run build` before starting production.'
  );
}

app.use(express.static(DIST_PATH));

app.get(/.*/, (req, res, next) => {
  if (req.path.startsWith('/api')) return next();

  // Do not rewrite requests for static files; let express return 404 instead.
  if (path.extname(req.path)) return next();

  return res.sendFile(INDEX_PATH);
});

// Express 5 passes listen errors (e.g. EADDRINUSE) to the callback; they are never thrown.
app.listen(PORT, (error) => {
  if (error) {
    console.error(`[app] Error: ${error.message}`);
    process.exit(1);
  }

  console.log(
    `[app] taufiq is running on port ${PORT} | Deploy mode: ${
      process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
    }`
  );
});
