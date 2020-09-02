const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://postgres:abc123@localhost:5432/test'
  })

exports.knex = knex