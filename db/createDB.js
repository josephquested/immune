'use strict'

let knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db/scores.sqlite'
  },
  useNullAsDefault: true
})

let dropSql = 'DROP TABLE IF EXISTS Scores;'
let createSql =
  `CREATE TABLE Scores (
   name VARCHAR(255) NOT NULL,
   score SMALLINT NOT NULL);`

knex.raw(dropSql).then((res) => {
  return knex.raw(createSql)
  }).then((res) => {
   process.exit()
})