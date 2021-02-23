require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());


app.use('/v1', require('./src/routes/v1.routes'));

app.use(require('./src/middlewares/error'));

/**
 * Health check endpoint
 *
 * @param {e.Request} request - The Request
 * @param {e.Response} response - The Response
 */
app.get('/', (request, response) => {
  const {name, version, author, description, license, keywords} = require('./package.json');

  response.json({name, version, author, description, license, keywords})
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`nit app in ${app.settings.env} mode`);
});
