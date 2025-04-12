
const express = require('express');
const app = express();
const port = 3011;
const produtosRoutes = require('./src/routes/produtosRoutes')

app.use(express.json());

app.use(produtosRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})