// lambda.js
import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/health-check', (req, res) => {
  res.send('Hello, Wilco Medusa Backend!');
});

// Export the handler for AWS Lambda
export const handler = serverless(app);
