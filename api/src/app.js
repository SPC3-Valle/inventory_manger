const express = require('express')
const app = express()
const port = 8080

const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (req, res) => {
    res.status(200).json('This is the root')
})

app.listen(port, () => console.log (`Express server listening on port ${port}`))

app.get('/items', (req, res) => {
    knex('item_info')
        .select('*')
        .then(item => {
            var Items = item.map(item => item.Description)
            res.json(Items)
        })
})

app.get('/user', (req, res) => {
    knex('user_info')
        .select('*')
        .then(user => {
            var Online = user.map(user => user['First Name'])
            res.json(Online)
        })
})

app.get("/all_items", (req, res) => {
    knex("item_info")
      .select("*")
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((err) => {
        res.status(404).send({
          message: "No items found",
        });
      });
  });