const db = require("../db/db")
db.knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('password')
    table.unique('email')
  })
  .then((response) => {
      console.log("User Table Created")
  })
