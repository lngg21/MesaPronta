import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const restaurants = [
    {
        nome: "PABLITO",
        email: "pablito2012@gmail.com",
        telefone: 81985930021,
    },
    {
        nome: "JUANITO",
        email: "juanito120@gmail.com",
        telefone: 81986217821,
    },
    {
        nome: "sanito",
        email: "sanito212@gmail.com",
        telefone: 9293912356,
    }
];

router.post('/', (req, res) => {
    const restaurants = req.body;

    restaurants.push({ ...restaurants, id: uuidv4() });

    res.send(`${restaurants.nome} has been added to the Database`);
})  


router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundRestaurants = restaurantss.find((restaurants) => restaurants.id === id)

    res.send(foundRestaurants)
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    restaurants = restaurants.filter((restaurants) => restaurants.id !== id)
  
    res.send(`${id} deleted successfully from database`);
  });


  router.patch('/:id', (req, res) => {
    const { id } = req.params;
  
    const { nome, telefone, email} = req.body;
  
    const restaurants = restaurants.find((restaurants) => restaurants.id === id)
  
    if(nome) restaurants.nome = nome;
    if(telefone) restaurants.telefone = telefone;
    if(email) restaurants.email = email;
  
    res.send(`User with the ${id} has been updated`)
  
  });


// Getting the list of restaurants from the mock database
router.get('/', (req, res) => {
    res.send(restaurants);
});

export default router;