import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

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

app.use(express.static(path.join(process.cwd(), 'dist')));

app.use('/', (req, res, next) => {
  if (req.method !== 'GET') return next();
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

try {
  app.listen(PORT, () => {
    console.log(
      `[app] taufiq is running on port ${PORT} | Deploy mode: ${
        process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
      }`
    );
  });
} catch (error) {
  logger.error(`[app] Error: ${error.message}`);
  process.exit(1);
}
