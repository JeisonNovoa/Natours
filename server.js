const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app.js');

const port = process.env.PORT || 8080;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`);
});
