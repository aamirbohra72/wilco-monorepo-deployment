import express from 'express';

const app = express(); 
// const port = 3000; 
const port = process.env.PORT || 8080;

app.get('/health-check', (req, res) => {
  res.send('Hello, Wilco Medusa Backend!');
});

app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);
});