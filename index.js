import express from 'express';
import bodyParser from 'body-parser';
import restaurantsRouter from "./routes/restaurants.js";

const app = express();
const PORT = 5000

app.use(bodyParser.json());

app.use('/restaurants', restaurantsRouter);

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})



app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));




// import mongoose from 'mongoose';

// // Conectar ao MongoDB
// mongoose.connect('mongodb://localhost:27017/seuBancoDeDados', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.once('open', () => {
//   console.log('Conectado ao banco de dados MongoDB!');
// });