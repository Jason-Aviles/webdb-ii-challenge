const express = require('express').Router();
const knex = require('knex');

const knexConfig = require('../knexfile')
const db= knex(knexConfig.development)


const router = express;


router.get('/', async (req, res) => {
  try {
    const cars = await db('cars');
    res.json(cars); 
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve cars' });
  }
});



router.get("/:id", (req, res) => {

  db("cars")
    .where({
      id: req.params.id
    })
    .first()
    .then(result => res.json(result));
});





router.post("/", (req, res) =>
  db("cars")
    .insert(req.body)
    .then(result => res.json(result))
);

router.put("/:id", (req, res) =>
  db("cars")
    .where({
      id: req.params.id
    })
    .update(req.body)
    .then(result => res.json(result))
);

router.delete("/:id", (req, res) => {
  db("cars")
    .delete()
    .where({
      id: req.params.id
    })
    .then(result => res.json(result));
});






module.exports = router;