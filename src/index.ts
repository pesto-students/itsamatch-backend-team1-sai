import express from 'express';
import cors from 'cors';

import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

import { config } from './config';
import { userRoutes, matchesRoutes } from './routes';
import { dbConnection } from './config';

const port = config.PORT;

const dotenv = require('dotenv');
dotenv.config()

// Connect to MongoDB
dbConnection();

const app = express();
app.use(cors());

Sentry.init({
  dsn: config.SENTRY_DSN,
  integrations: [new Sentry.Integrations.Http({ tracing: true }), new Tracing.Integrations.Express({ app })],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use('/users', userRoutes);
app.use('/matches', matchesRoutes);

app.get('/health', (_req, res) => res.json({ ok: true, message: 'health check working fine' }));

app.use(Sentry.Handlers.errorHandler());
app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

app.listen(port, () => console.log(`starting server in port ${port}`));
