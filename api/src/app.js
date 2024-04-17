const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const knex = require('knex')(require('../knexfile.js')["development"])

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).json('This is the root')
})

app.listen(port, () => console.log (`Express server listening on port ${port}`))

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

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

app.get('/all_items', (req, res) => {
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

  app.get('/owner/:id', (req, res) => {
    knex('item_info')
    .select("Item Name", "Description")
    .join("user_info", "item_info.UserId", "user_info.id")
    .where({UserId: `${req.params.id}`})
    .then(owner => {
        res.status(200).json(owner)
    })
    .catch((err) => {
        res.status(404).send({
            message: "Could not find an owner"
        })
    })
  })

  app.post('/account_creation', (req, res) => {
    let NewAccount = {
        "First Name": req.body["First Name"],
        "Last Name":  req.body["Last Name"],
        Username: req.body.Username,
        Password: req.body.Password
    }
    knex("user_info")
    .insert(NewAccount)
    .then(() => {
        res.status(201).send({
            message: "Account Created"
        })
    })
    .catch((err) => {
        res.status(404).send({
          message: "Could not create account",
        });
      });
    // console.log(req.body)
    // res.status(201).send('Here it is')
})